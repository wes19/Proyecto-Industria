import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  backendWeb: string = 'https://deliveryhnbackend.herokuapp.com';

  constructor(private httpClient:HttpClient) { }

  obtenerCategorias() :Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/categorias`,{});
  }

  obtenerEmpresas(idCategoria:any):Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/categorias/${idCategoria}/empresas`,{});
  }

  obtenerProductos(idCategoria:any,idEmpresa:any):Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/categorias/${idCategoria}/empresa/${idEmpresa}/productos`,{});
  }

  agregarEmpresa(data: any):Observable<any>{
    return this.httpClient.post(`${this.backendWeb}/categorias/${data.idCategoria}/empresas`,{
      nombreEmpresa: data.nombreEmpresa,
      direccion: data.direccion,
      nombreEncargado: data.nombreEncargado,
      telefono: data.telefono,
      estado: data.estado,
      logotipo: data.logotipo,
      banner: data.banner,
      calificacion: data.calificacion
    });
  }

  agregarProducto(data: any):Observable<any>{
    return this.httpClient.post(`${this.backendWeb}/categorias/${data.idCategoria}/empresas/${data.idEmpresa}/productos`,{
      imagenProducto: data.imagenProducto,
      nombreProducto: data.nombreProducto,
      precio: data.precio,
      estado: data.estado,
    });
  }

  actualizarEmpresa(data: any):Observable<any>{
    return this.httpClient.post(`${this.backendWeb}/categorias/${data.idCategoria}/empresas/${data.idEmpresa}`,{
      nombreEmpresa: data.nombreEmpresa,
      direccion: data.direccion,
      nombreEncargado: data.nombreEncargado,
      telefono: data.telefono,
      estado: data.estado,
      logotipo: data.logotipo,
      banner: data.banner,
      calificacion: data.calificacion
    });
  }

  actualizarProducto(data: any):Observable<any>{
    return this.httpClient.post(`${this.backendWeb}/categorias/${data.idCategoria}/empresas/${data.idEmpresa}/productos/${data.idProducto}`,{
      imagenProducto: data.imagenProducto,
      nombreProducto: data.nombreProducto,
      precio: data.precio,
      estado: data.estado,
    });
  }

}
