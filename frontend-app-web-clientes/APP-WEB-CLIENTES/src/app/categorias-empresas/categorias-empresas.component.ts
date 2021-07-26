import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-empresas',
  templateUrl: './categorias-empresas.component.html',
  styleUrls: ['./categorias-empresas.component.css']
})
export class CategoriasEmpresasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaLanding(){
    this.router.navigate(['']);
  }

  navegarHaciaMostrandoEmpresas(){
    this.router.navigate(['/empresas-categorias-seleccionada']);
  }
}
