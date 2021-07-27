import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PedidosDetalleDisponiblesComponent } from './components/pedidos-detalle-disponibles/pedidos-detalle-disponibles.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LandingPageMotoristaComponent } from './components/landing-page-motorista/landing-page-motorista.component';

import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidosDetalleProgresoComponent } from './components/pedidos-detalle-progreso/pedidos-detalle-progreso.component';


const routes: Routes = [
  { path: '', component: LandingPageMotoristaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'requisitos', component: RequisitosComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'login/pedidos', component: PedidosComponent},
  { path: 'login/pedidos/pedidos-detalle-disponibles', component: PedidosDetalleDisponiblesComponent},
  { path: 'login/pedidos/pedidos-detalle-progreso', component: PedidosDetalleProgresoComponent},
  { path: 'login/pedidos/pedidos-detalle-progreso/factura', component: FacturaComponent},
  { path: '**', pathMatch: 'full', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
