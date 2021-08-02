import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadiendoProductoCarritoComponent } from './anadiendo-producto-carrito/anadiendo-producto-carrito.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { CategoriasEmpresasComponent } from './categorias-empresas/categorias-empresas.component';
import { DireccionClienteComponent } from './direccion-cliente/direccion-cliente.component';
import { EmpresasCategoriaSeleccionadaComponent } from './empresas-categoria-seleccionada/empresas-categoria-seleccionada.component';
import { FormPagoTcComponent } from './form-pago-tc/form-pago-tc.component';
import { LandingClienteComponent } from './landing-cliente/landing-cliente.component';
import { LoginComponent } from './login/login.component';
import { OrdenesClienteComponent } from './ordenes-cliente/ordenes-cliente.component';
import { ProductosEmpresaSeleccionadaComponent } from './productos-empresa-seleccionada/productos-empresa-seleccionada.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {path: '', component: LandingClienteComponent},
  {path: 'registro-cliente', component: RegistroClienteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'categorias-empresas', component: CategoriasEmpresasComponent},
  {path: 'empresas-categorias-seleccionada', component: EmpresasCategoriaSeleccionadaComponent},
  {path: 'productos', component: ProductosEmpresaSeleccionadaComponent},
  {path: 'anadiendo-carrito', component: AnadiendoProductoCarritoComponent},
  {path: 'carrito-compras', component: CarritoCompraComponent},
  {path: 'direccion-cliente', component: DireccionClienteComponent},
  {path: 'datos-tarjeta', component: FormPagoTcComponent},
  {path: 'ordenes-cliente', component: OrdenesClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
