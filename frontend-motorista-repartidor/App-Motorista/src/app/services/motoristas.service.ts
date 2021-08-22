import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  backendWeb: string = 'https://deliveryhnbackend.herokuapp.com';

  constructor(private httpClient:HttpClient) { }

  obtenerMotoristas():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/motoristas`, {});
  }

  obtenerMotoristasCorreo(correo: any):Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/motoristas/${correo}`, {});
  }

  guardarMotorista(data : any):Observable<any>{
    return this.httpClient.post(`${this.backendWeb}/motoristas`, {
      dni : data.dni,
      nombre : data.nombre,
      apellido : data.apellido,
      correo : data.correo,
      telefono : data.telefono,
      direccion : data.direccion,
      fechaNacimiento : data.fechaNacimiento,
      estadoCivil : data.estadoCivil,
      formacion : data.formacion,
      discapacidad : data.discapacidad,
      descripcion : data.descripcion,
      pasadoProfesional : data.pasadoProfesional
    });
  }
}
