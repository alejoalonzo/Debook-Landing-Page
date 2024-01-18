import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.randomUsersApiBaseUrl;

  searchUsers(userName: string): Observable<any> {

    const params = new HttpParams().set('q', userName);

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.XRapidAPIkeyHeaderValue,
      'X-RapidAPI-Host': environment.XRapidAPIhostHeaderValue
    });

    return this.http.get(this.apiUrl, { headers, params });
  }
}
