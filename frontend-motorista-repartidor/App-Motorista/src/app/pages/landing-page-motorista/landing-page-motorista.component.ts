import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page-motorista',
  templateUrl: './landing-page-motorista.component.html',
  styleUrls: ['./landing-page-motorista.component.css']
})
export class LandingPageMotoristaComponent implements OnInit {
  /*@Output() onVerLogin = new EventEmitter;
  @Output() onVerFormulario = new EventEmitter;
  @Output() onVerRequisitos = new EventEmitter;*/
  constructor() { }

  ngOnInit(): void {
  }

  /*VerLogin(){
    this.onVerLogin.emit();
  }

  VerFormulario(){
    this.onVerFormulario.emit();
  }

  VerRequisitos(){
    this.onVerRequisitos.emit();
  }*/
}
