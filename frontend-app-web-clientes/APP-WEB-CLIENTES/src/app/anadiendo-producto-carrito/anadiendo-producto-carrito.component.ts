import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadiendo-producto-carrito',
  templateUrl: './anadiendo-producto-carrito.component.html',
  styleUrls: ['./anadiendo-producto-carrito.component.css']
})
export class AnadiendoProductoCarritoComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaAtras(){
    this.router.navigate(['/productos']);
  }

  navegandoHaciaCarritoCompras(){
    this.router.navigate(['/carrito-compras']);
  }

}
