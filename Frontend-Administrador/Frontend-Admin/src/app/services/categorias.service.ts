import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient:HttpClient) { }

  obtenerEmpresas(idCategoria:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias/${idCategoria}/empresas`,{});
  }

  obtenerProductos(idCategoria:any,idEmpresa:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias/${idCategoria}/empresa/${idEmpresa}/productos`,{});
  }

  agregarEmpresa(data: any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/categorias/${data.idCategoria}/empresas`,{
      nombreEmpresa: data.nombreEmpresa,
      direccion: data.direccion,
      nombreEncargado: data.nombreEncargado,
      telefono: data.calificacion,
      estado: data.descargas,
      logotipo: data.precio,
      banner: data.desarrollador,
      calificacion: data.desarrollador
    });
  }

  agregarProducto(data: any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/categorias/${data.idCategoria}/empresa/${data.idEmpresa}/productos`,{
      imagenProducto: data.nombreEmpresa,
      nombreProducto: data.direccion,
      precio: data.nombreEncargado,
      estado: data.calificacion,
    });
  }

  actualizarEmpresa(data: any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/categorias/${data.idCategoria}/empresas/${data.idEmpresa}`,{
      nombreEmpresa: data.nombreEmpresa,
      direccion: data.direccion,
      nombreEncargado: data.nombreEncargado,
      telefono: data.calificacion,
      estado: data.descargas,
      logotipo: data.precio,
      banner: data.desarrollador,
      calificacion: data.desarrollador
    });
  }

  actualizarProducto(data: any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/categorias/${data.idCategoria}/empresa/${data.idEmpresa}/productos/${data.idProducto}`,{
      imagenProducto: data.nombreEmpresa,
      nombreProducto: data.direccion,
      precio: data.nombreEncargado,
      estado: data.calificacion,
    });
  }

}
