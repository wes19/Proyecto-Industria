import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direccion-cliente',
  templateUrl: './direccion-cliente.component.html',
  styleUrls: ['./direccion-cliente.component.css']
})
export class DireccionClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaAtras(){
    this.router.navigate(['/carrito-compras']);
  }

  navegandoHaciaFormTC(){
  this.router.navigate(['/datos-tarjeta']);
  }

}
