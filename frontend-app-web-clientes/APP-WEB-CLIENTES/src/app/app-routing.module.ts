import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingClienteComponent } from './landing-cliente/landing-cliente.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {path: '', component: LandingClienteComponent},
  {path: 'registro-cliente', component: RegistroClienteComponent},
  /*{path: 'login', component: LoginComponent},
  {path: 'recuperar-contrasenia', component: RecupearContraseniaComponent},
  {path: 'home-cliente', component: HomeClienteComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
