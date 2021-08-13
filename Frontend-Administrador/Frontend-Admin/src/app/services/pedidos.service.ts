import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient:HttpClient) { }

  obtenerPedidos():Observable<any>{
    return this.httpClient.get('http://localhost:8888/pedidos', {});
  }

  actualizarPedido(idPedido: any, estado: any, idMotorista: any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/pedidos/${idPedido}`, {
      estado: estado,
      idMotorista: idMotorista
    });
  }

}
