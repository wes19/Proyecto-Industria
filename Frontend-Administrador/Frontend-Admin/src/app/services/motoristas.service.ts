import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private httpClient:HttpClient) { }

  obtenerMotoristas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/motoristas',{});
  }

  actualizarMotoristas(data: any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/motoristas/${data.idMotorista}`, {
      codEmpleado : data.codEmpleado,
      dni : data.dni,
      nombre : data.nombre,
      apellido : data.apellido,
      correo : data.correo,
      telefono : data.telefono,
      direccion : data.direccion,
      fechaNacimiento : data.fechaNacimiento,
      password: data.password,
      estadoCivil : data.estadoCivil,
      formacion : data.formacion,
      discapacidad : data.discapacidad,
      descripcionDiscapacidad : data.descripcionDiscapacidad,
      pasadoProfesional : data.pasadoProfesional,
      estado : data.estado
    });
  }

  eliminarMotoristas(idPeticion: any):Observable<any>{
    return this.httpClient.delete(`http://localhost:8888/motoristas/${idPeticion}`,{});
  }

}
