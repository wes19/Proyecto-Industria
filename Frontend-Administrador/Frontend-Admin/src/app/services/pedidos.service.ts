import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  backendWeb: string = 'https://deliveryhnbackend.herokuapp.com';

  constructor(private httpClient:HttpClient) { }

  obtenerPedidos():Observable<any>{
    return this.httpClient.get(`${this.backendWeb}/pedidos`, {});
  }

  actualizarPedido(idPedido: any, estado: any, idMotorista: any):Observable<any>{
    return this.httpClient.post(`${this.backendWeb}/pedidos/${idPedido}`, {
      estado: estado,
      idMotorista: idMotorista
    });
  }

}
