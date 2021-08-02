import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-empresa-seleccionada',
  templateUrl: './productos-empresa-seleccionada.component.html',
  styleUrls: ['./productos-empresa-seleccionada.component.css']
})
export class ProductosEmpresaSeleccionadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaLanding(){
    this.router.navigate(['']);
  }

  navegandoHaciaAnadiendoAlCarrito(){
    this.router.navigate(['anadiendo-carrito']);
  }
  

}
