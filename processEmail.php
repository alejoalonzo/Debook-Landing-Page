<?php

if ($_POST) {
    // convert POST variables to local ones
    $email = $_POST['email'];
    $name = $_POST['name'];
    $button = $_POST['button'];
} else {
    // if not $_POST then we are local testing
    $email = 'test3@email.com';
    $name = 'john';
    $button = 'pitch';
}

// set up errors and header
$dataError = false;
$buttonEnum = array("pitch", "demo");
$header = '';

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

// if data validation error, exit
if ($dataError) {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request";
    header($header);
    echo $header;
    echo "<br /> Bad Form Data";
    exit;
}

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
            'firstName' => $name
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

// close the connection
curl_close($curl);

if ($curlErr) {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request";
    header($header);
    echo $curlErr;
} else {
    $header = $_SERVER["SERVER_PROTOCOL"] . " 200 OK";
    header($header);
}

?>