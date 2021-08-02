import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCreditCard, faMapMarkerAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-detalle-progreso',
  templateUrl: './pedidos-detalle-progreso.component.html',
  styleUrls: ['./pedidos-detalle-progreso.component.css']
})
export class PedidosDetalleProgresoComponent implements OnInit {
  //@Output() onCategoriaSeleccionada = new EventEmitter();
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  faUndoAlt = faUndoAlt;
  categoriaSeleccionada: any = 'progreso'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoPedidosP(){
    this.router.navigate(['/pedidos', 'progreso']);
  }
}

