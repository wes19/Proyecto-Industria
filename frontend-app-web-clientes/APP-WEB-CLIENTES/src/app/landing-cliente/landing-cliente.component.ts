import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-cliente',
  templateUrl: './landing-cliente.component.html',
  styleUrls: ['./landing-cliente.component.css']
})
export class LandingClienteComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  navegandoHaciaRegistro(){
    this.router.navigate(["/registro-cliente"]);
  }

}
