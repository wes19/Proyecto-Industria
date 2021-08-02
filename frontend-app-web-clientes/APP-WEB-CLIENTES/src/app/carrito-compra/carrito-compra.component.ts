import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaAtras(){
    this.router.navigate(['/anadiendo-carrito']);
  }

  navegandoHaciaDireccion(){
  this.router.navigate(['/direccion-cliente']);
  }
}
