import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-detalle-progreso',
  templateUrl: './pedidos-detalle-progreso.component.html',
  styleUrls: ['./pedidos-detalle-progreso.component.css']
})
export class PedidosDetalleProgresoComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  faUndoAlt = faUndoAlt;
  pedidosDetalles : any = [];
  estadoSeleccionado : any = '';

  constructor(private router: Router, private pedidosService:PedidosService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("idMotorista");
    if(token == null){
      this.router.navigate(['/login']);
    }

    this.pedidosDetalles = this.pedidosService.grabarPedido;
    this.estadoSeleccionado = this.pedidosDetalles.estado;
  }

  navegandoPedidosP(){
    this.router.navigate(['/pedidos', 'progreso']);
  }

  salir(){
    localStorage.removeItem("idMotorista");
    this.router.navigate(['/login']);
  }

  cambioEstado(order: any){
    order.estado = this.estadoSeleccionado;
    this.pedidosService.actualizarPedido(order._id, order.estado, order.idMotorista).subscribe(
      res=>{
      },
      error=>console.log(error)
    )
    console.log()
  }

  irFactura(){
    if(this.estadoSeleccionado == "En el Destino"){
      this.router.navigate(['/factura']);
    }
  }
}

