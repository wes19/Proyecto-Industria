import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-entregados',
  templateUrl: './pedidos-entregados.component.html',
  styleUrls: ['./pedidos-entregados.component.css']
})
export class PedidosEntregadosComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  pedidos: any = [];
  pedidosTemporal: any = [];
  idMotoristaTemporal: any;
  
  pedidosEntregado: any = [{
    imagen: "../assets/img/img1.jpg",
    empresa: "Asados el Churrasco",
    ubicacion: "Cerro Grande",
    comisionMotorista: "Lps. 70",
    estado: "Pedido Entregado"
  }]
  constructor(private pedidosService:PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.pedidosService.obtenerPedidos().subscribe(
      res=>{
        this.pedidosTemporal = res;
        this.idMotoristaTemporal = localStorage.getItem("idMotorista");
        for(let i = 0; i < this.pedidosTemporal.length; i++){
          if(this.pedidosTemporal[i].estado == "entregada"){
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
}
