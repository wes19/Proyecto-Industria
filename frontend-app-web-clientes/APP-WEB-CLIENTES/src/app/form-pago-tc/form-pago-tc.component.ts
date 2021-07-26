import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pago-tc',
  templateUrl: './form-pago-tc.component.html',
  styleUrls: ['./form-pago-tc.component.css']
})
export class FormPagoTcComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaAtras(){
    this.router.navigate(['/direccion-cliente']);
  }

  navegandoHaciaOrdenes(){
  this.router.navigate(['/ordenes-cliente']);
  }

}
