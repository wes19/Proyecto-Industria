import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedidos-entregados',
  templateUrl: './pedidos-entregados.component.html',
  styleUrls: ['./pedidos-entregados.component.css']
})
export class PedidosEntregadosComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  
  pedidosEntregado: any = [{
    imagen: "../assets/img/img1.jpg",
    empresa: "Asados el Churrasco",
    ubicacion: "Cerro Grande",
    comisionMotorista: "Lps. 70",
    estado: "Pedido Entregado"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
