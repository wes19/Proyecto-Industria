import { Component, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedidos-detalle-disponibles',
  templateUrl: './pedidos-detalle-disponibles.component.html',
  styleUrls: ['./pedidos-detalle-disponibles.component.css']
})
export class PedidosDetalleDisponiblesComponent implements OnInit {
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  faUndoAlt = faUndoAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
