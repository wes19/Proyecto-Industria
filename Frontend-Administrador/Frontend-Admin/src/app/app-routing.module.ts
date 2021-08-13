import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { MotoristasComponent } from './pages/motoristas/motoristas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PeticionesEmpleoComponent } from './pages/peticiones-empleo/peticiones-empleo.component';
//import { ProductosComponent } from './pages/productos/productos.component';
import { MotoristaInactivoComponent } from './pages/motorista-inactivo/motorista-inactivo.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'empresas', component: EmpresasComponent},
  //{ path: 'productos', component: ProductosComponent},
  { path: 'motoristas', component: MotoristasComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'peticiones-empleo', component: PeticionesEmpleoComponent},
  { path: 'motoristas-inactivo', component: MotoristaInactivoComponent},
  { path: '**', pathMatch: 'full', redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
