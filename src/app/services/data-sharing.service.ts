import { Injectable, inject } from '@angular/core';
import { Subject, Observable, map, of  } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private apiUrl = environment.apiUrl;
  private processEmailPhp = environment.processEmailPhp;

  constructor(private http: HttpClient) { }

  // http= inject(HttpClient)

  createNewContact(productData: User): Observable<any> {
    
    return this.http.post(this.processEmailPhp, productData);
  }

  getApiData(): Observable<any> {
    let params = new HttpParams();
    return this.http.get<any>(this.apiUrl, { params: params });
  }
}
