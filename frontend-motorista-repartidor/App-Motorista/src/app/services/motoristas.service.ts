import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  //public motoristaCre: any;
  constructor(private httpClient:HttpClient) { }

  obtenerMotoristas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/motoristas', {});
  }

  obtenerMotoristasCorreo(correo: any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas/${correo}`, {});
  }

  guardarMotorista(data : any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/motoristas', {
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
      descripcionDiscapacidad : data.descripcionDiscapacidad,
      pasadoProfesional : data.pasadoProfesional
    });
  }
}
