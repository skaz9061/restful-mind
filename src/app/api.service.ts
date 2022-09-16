import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

const API_URL: string = 'https://rmmh-api-q32cac7fba-ul.a.run.app/api/';
//const API_URL:string = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  public ping() {
    this.http.get<string>(API_URL + 'ping').subscribe({
      next: data => {
        console.log(data)
      },
      error: error => {
        console.error('error pinging api: %s', error.message)
      }
    });
  }

  public recaptcha(token: string): Observable<boolean> {
    let body = JSON.stringify({token: token});
    return this.http.post<boolean>(API_URL + 'recaptcha', body)
  }

  public email(name: string, address: string, email: string, phoneNumber: string, message: string): Observable<string> {
    let body = JSON.stringify({
      name: name,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    })

    return this.http.post<string>(API_URL + 'contact', body);
  }
}
