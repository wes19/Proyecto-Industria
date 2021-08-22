import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {
   
   backendWeb: string = 'https://deliveryhnbackend.herokuapp.com';

  constructor(private httpClient:HttpClient) { }

  obtenerAdministradores():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/administradores`, {});
  }

  obtenerAdminCorreo(correo: any):Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/administradores/${correo}`, {});
  }

}
