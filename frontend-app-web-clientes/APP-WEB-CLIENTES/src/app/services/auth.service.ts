import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backendHost: string = 'http://localhost:8888';

  constructor(
      private httpClient: HttpClient,
      private router:Router
      ) { }

  // Login
loginCliente(data: any): Observable<any> {
  return this.httpClient.post(`${this.backendHost}/clientes/login`, data);
}

registrarCliente(data: any): Observable<any> {
  return this.httpClient.post(`${this.backendHost}/clientes/registro`, data);
}

logoutCliente(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('correoCliente');
  this.router.navigate(['/login']);
}

loggedInCliente(): boolean {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}

getToken() {
  return localStorage.getItem('token');
}

}
