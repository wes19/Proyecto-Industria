import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCreditCard, faExchangeAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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
        console.log(this.pedidosTemporal)
        for(let i = 0; i < this.pedidosTemporal.length; i++){
          if(this.pedidosTemporal[i].estado == "Pendiente"){
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
      logoEmpresa : pedido.logoEmpresa,
      nombreEmpresa : pedido.nombreEmpresa,
      direccion : pedido.direccion,
      producto : pedido.producto,
      total : pedido.total,
      comisionMotorista : pedido.comisionMotorista,
      estado : pedido.estado,
      idMotorista: pedido.idMotorista,
    }
    this.router.navigate(['/pedidos-detalle-disponibles']);
  }

  salir(){
    localStorage.removeItem("idMotorista");
    this.router.navigate(['/login']);
  }
}
