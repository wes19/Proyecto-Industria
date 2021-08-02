import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedidos-disponibles',
  templateUrl: './pedidos-disponibles.component.html',
  styleUrls: ['./pedidos-disponibles.component.css']
})
export class PedidosDisponiblesComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;

  pedidosDisponibles: any = [{
    imagen: "../assets/img/img1.jpg",
    empresa: "Asados el Churrasco",
    card: "Acepta pago Online",
    ubicacion: "Cerro Grande",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70"
  },
  {
    imagen: "../assets/img/img2.jpg",
    empresa: "Denny's",
    card: "Acepta pago Online",
    ubicacion: "Barrio el Chile",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 50"
  },
  {
    imagen: "../assets/img/img3.jpg",
    empresa: "Punto Farma",
    card: "Acepta pago Online",
    ubicacion: "Centro America",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 60"
  },
  {
    imagen: "../assets/img/img4.jpg",
    empresa: "Despensa Familiar",
    card: "Acepta pago Online",
    ubicacion: "Carrizal",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70"
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
