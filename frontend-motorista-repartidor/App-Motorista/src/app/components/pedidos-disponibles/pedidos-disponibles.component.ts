import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { PedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-pedidos-disponibles',
  templateUrl: './pedidos-disponibles.component.html',
  styleUrls: ['./pedidos-disponibles.component.css']
})
export class PedidosDisponiblesComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  pedidos: any = [];
  pedidosTemporal: any = [];

  constructor(private pedidosService:PedidosService, private router: Router) { }

  ngOnInit(): void {

    this.pedidosService.obtenerPedidos().subscribe(
      res=>{
        this.pedidosTemporal = res;
        for(let i = 0; i < this.pedidosTemporal.length; i++){
          if(this.pedidosTemporal[i].estado == "pendiente"){
            this.pedidos.push(this.pedidosTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
    console.log()
  }

  irDetallePedido(pedido: any){

    this.pedidosService.storage = {
      _id : pedido._id,
      logotipo : pedido.logotipo,
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
      comisionAdministracion : pedido.comisionAdministracion,
      isv : pedido.isv,
      estado : pedido.estado,
      idMotorista: pedido.idMotorista
    }
    console.log("primer control (nada)"+pedido.idMotorista)

    this.router.navigate(['/pedidos-detalle-disponibles']);
  }


  salir(){
    localStorage.removeItem("idMotorista");
    this.router.navigate(['/login']);
  }
}
