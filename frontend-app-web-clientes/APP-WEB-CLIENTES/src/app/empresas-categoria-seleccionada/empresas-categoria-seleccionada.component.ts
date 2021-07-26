import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas-categoria-seleccionada',
  templateUrl: './empresas-categoria-seleccionada.component.html',
  styleUrls: ['./empresas-categoria-seleccionada.component.css']
})
export class EmpresasCategoriaSeleccionadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaLanding(){
    this.router.navigate(['']);
  }

  navegandoHaciaMostrandoProductosEmpresasSeleccionada(){
    this.router.navigate(['/productos']);
  }
}
