import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-categorias-empresas',
  templateUrl: './categorias-empresas.component.html',
  styleUrls: ['./categorias-empresas.component.css']
})
export class CategoriasEmpresasComponent implements OnInit {

  
  constructor(
    private router: Router,
    private authService:AuthService
    ) { }

   nombreCliente: String | undefined;

  ngOnInit(): void {
    this.nombreCliente = JSON.stringify(localStorage.getItem('nombreCliente'));
  }

 salir(){
   this.authService.logoutCliente();
 }

  navegarHaciaMostrandoEmpresas(){
    this.router.navigate(['/empresas-categorias-seleccionada']);
  }

  
}
