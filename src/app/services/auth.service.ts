import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';

const AUTH_API = 'https://localhost:44320/api/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any>{
    return this.http.post(AUTH_API, { 
      usuario_username: credentials.usuario_username,
      usuario_password: credentials.usuario_password
     }, httpOptions);
  }
}
