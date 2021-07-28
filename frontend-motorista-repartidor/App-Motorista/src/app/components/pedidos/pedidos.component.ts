import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
categoriaSeleccionada: any = ''
disponibles: any = 'disponibles';
progreso: any = 'progreso';
entregados: any = 'entregados';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params)=>{
      if(params["name"]==null){
        this.categoriaSeleccionada = 'disponibles'
      }else{
        this.categoriaSeleccionada = params["name"];
      }
    })  
  }

  ngOnInit(): void {
  }
    
}
