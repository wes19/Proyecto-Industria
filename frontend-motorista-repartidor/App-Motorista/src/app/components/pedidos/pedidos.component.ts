import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
categoriaSeleccionada: any;
disponibles: any = 'disponibles';
progreso: any = 'progreso';
entregados: any = 'entregados';

  constructor() { }

  ngOnInit(): void {
  }

  Renderizado(){}
}
