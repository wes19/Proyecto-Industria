import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params)=>{
      if(params["name"]==null){
        this.categoriaSeleccionada = 'disponibles'
      }else{
        this.categoriaSeleccionada = params["name"];
      }
    })  
  }

  ngOnInit(): void {
    let token = localStorage.getItem("idMotorista");
    if(token == null){
      this.router.navigate(['/login']);
    }
  }
    
}
