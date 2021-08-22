import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-progreso',
  templateUrl: './pedidos-progreso.component.html',
  styleUrls: ['./pedidos-progreso.component.css']
})
export class PedidosProgresoComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  pedidos: any = [];
  pedidosTemporal: any = [];
  idMotoristaTemporal: any;

  constructor(private pedidosService:PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.pedidosService.obtenerPedidos().subscribe(
      res=>{
        this.pedidosTemporal = res;
        this.idMotoristaTemporal = localStorage.getItem("idMotorista");
        for(let i = 0; i < this.pedidosTemporal.length; i++){
          if(this.pedidosTemporal[i].estado == "Tomada" || this.pedidosTemporal[i].estado == "En Camino" 
          || this.pedidosTemporal[i].estado == "En el Origen" || this.pedidosTemporal[i].estado == "En el Destino"){
            if(this.pedidosTemporal[i].idMotorista == this.idMotoristaTemporal){
              this.pedidos.push(this.pedidosTemporal[i]);
            }
          }
        }
      },
      error=>console.log(error)
    )
    console.log()
  }

  salir(){
    localStorage.removeItem("idMotorista");
    this.router.navigate(['/login']);
  }

  irPedidosDetalles(pedido: any){
    
    this.pedidosService.grabarPedido = {
      _id : pedido._id,
      logoEmpresa : pedido.logoEmpresa,
      nombreEmpresa : pedido.nombreEmpresa,
      direccion : pedido.direccion,
      producto : pedido.producto,
      subtotal : pedido.subtotal,
      total : pedido.total,
      comisionMotorista : pedido.comisionMotorista,
      nombreCliente : pedido.nombreCliente,
      telefono : pedido.telefono,
      precio : pedido.precio,
      cantidad : pedido.cantidad,
      comisionAdmin : pedido.comisionAdmin,
      isv : pedido.isv,
      estado : pedido.estado,
      idMotorista: pedido.idMotorista,
      fecha : pedido.fecha,
      hora : pedido.hora
    }
    this.router.navigate(['/pedidos-detalle-progreso']);
  }
}
