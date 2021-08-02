import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedidos-progreso',
  templateUrl: './pedidos-progreso.component.html',
  styleUrls: ['./pedidos-progreso.component.css']
})
export class PedidosProgresoComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;

  pedidosProgreso: any = [{
    imagen: "../assets/img/img1.jpg",
    empresa: "Asados el Churrasco",
    card: "Acepta pago Online",
    ubicacion: "Cerro Grande",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70",
    estado: "Pedido En Progreso"
  },
  {
    imagen: "../assets/img/img2.jpg",
    empresa: "Denny's",
    card: "Acepta pago Online",
    ubicacion: "Barrio el Chile",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 50",
    estado: "Pedido En Progreso"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
