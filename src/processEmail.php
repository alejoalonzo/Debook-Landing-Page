<?php

/**
 * This is a brute force style linear script to get MVP of email integrations
 * working for customer. This should NOT be the long term solution for
 * adding new customers to Active Campaign and sending emails. A real
 * class should be written with methos that DRY this up a lot.
 */

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // convert POST json payload to local vars
    $json = json_decode(file_get_contents('php://input'), true);
    $email  = $json['email'];
    $name   = $json['name'];
    $button = $json['button'];
    $lang   = $json['language'];
} else {
    // if not $_POST then we are local testing
    $email  = 'mazureth+testen@gmail.com';
    $name   = 'Jesse';
    $button = 'pitch';
    $lang   = 'en';
}

// set up errors and header
$header          = '';
$dataError       = false;
$buttonEnum      = array("pitch", "demo");
$langEnum        = array("en", "es");
$langTemplateMap = array(
    "en" => 1,
    "es" => 2
);

// validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $dataError = true;
}

// make sure name is not empty
if (strlen($name) == 0) {
    $dataError = true;
}

// make sure button is one of "pitch" or "demo"
if (!in_array($button, $buttonEnum)) {
    $dataError = true;
}

// make sure language is one of "en" or "es"
if (!in_array($lang, $langEnum)) {
    $dataError = true;
}

// if data validation error, exit
if ($dataError) {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request";
    header($header);
    echo $header;
    exit;
}

//echo "data validated, looking up customer via ".$email."<br />";

$json = '';

// lookup email to see if it exists
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://ernestvinas9327365.api-us1.com/api/3/contacts?email=" . urlencode($email),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
        "Api-Token: d505b3c5c71294c9f78355dba5fa389394a6518b1645e227fe31606273741ed42967fef2",
        "accept: application/json"
    ],
]);

// execute the lookup
$response = curl_exec($curl);
$curlErr = curl_error($curl);
curl_close($curl);

// if error exit with error code
if ($curlErr) {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request";
    header($header);
    echo $curlErr;
    exit;
}

// no errors yet, process response
$json = json_decode($response, true);
$customerID = '';

//echo "number of contacts found is ".count($json["contacts"])."<br />";

// if no email found, add it to Active Campaign
if (count($json["contacts"]) == 0) {

    //echo "customer not found, adding to Active Campaign<br />";

    // initialize cURL to remote API
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://ernestvinas9327365.api-us1.com/api/3/contacts",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode([
            'contact' => [
                'email' => $email,
                'firstName' => $name,
                'fieldValues' => [
                    [
                        'field' => '1',
                        'value' => $lang
                    ]
                ]
            ]
        ]),
        CURLOPT_HTTPHEADER => [
            "Api-Token: d505b3c5c71294c9f78355dba5fa389394a6518b1645e227fe31606273741ed42967fef2",
            "accept: application/json",
            "content-type: application/json"
        ],
    ]);

    // execute the request
    $response = curl_exec($curl);
    $curlErr = curl_error($curl);
    curl_close($curl);

    // if an error occurs exit with error
    if ($curlErr) {
        $header = $_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request";
        header($header);
        echo $curlErr;
        exit;
    }

    $json = json_decode($response, true);
    //echo "customer added, new customer ID is " . $json["contact"]["id"] . "<br />";
    $customerID = $json["contact"]["id"];
} else {
    //echo "customer was found, customer ID is " . $json["contacts"][0]["id"] . "<br />";
    $customerID = $json["contacts"][0]["id"];
}

// add customer to the correct list to kick off
// auto email for Pitchdeck and Demo

//echo "adding to listID 2<br />";

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://ernestvinas9327365.api-us1.com/api/3/contactLists",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'contactList' => [
        'sourceid' => 0,
        'list' => '2',
        'contact' => $customerID,
        'status' => '1'
    ]
  ]),
  CURLOPT_HTTPHEADER => [
    "Api-Token: d505b3c5c71294c9f78355dba5fa389394a6518b1645e227fe31606273741ed42967fef2",
    "accept: application/json",
    "content-type: application/json"
  ],
]);

$response = curl_exec($curl);
$curlErr = curl_error($curl);

curl_close($curl);

//echo "<pre>";
//var_dump(json_decode($response));
//echo "</pre>";

if ($curlErr) {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request";
    header($header);
    echo $curlErr;
    exit;
} else {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 200 OK";
    header($header);
    echo $curlErr;
    exit;
}

?>