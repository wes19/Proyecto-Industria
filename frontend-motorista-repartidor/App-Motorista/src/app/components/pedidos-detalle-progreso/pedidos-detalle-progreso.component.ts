import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedidos-detalle-progreso',
  templateUrl: './pedidos-detalle-progreso.component.html',
  styleUrls: ['./pedidos-detalle-progreso.component.css']
})
export class PedidosDetalleProgresoComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
