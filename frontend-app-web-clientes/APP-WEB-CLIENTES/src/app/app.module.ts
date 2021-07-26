import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingClienteComponent } from './landing-cliente/landing-cliente.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { FormPagoTcComponent } from './form-pago-tc/form-pago-tc.component';
import { CategoriasEmpresasComponent } from './categorias-empresas/categorias-empresas.component';
import { LoginComponent } from './login/login.component';
import { EmpresasCategoriaSeleccionadaComponent } from './empresas-categoria-seleccionada/empresas-categoria-seleccionada.component';
import { ProductosEmpresaSeleccionadaComponent } from './productos-empresa-seleccionada/productos-empresa-seleccionada.component';
import { AnadiendoProductoCarritoComponent } from './anadiendo-producto-carrito/anadiendo-producto-carrito.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { DireccionClienteComponent } from './direccion-cliente/direccion-cliente.component';
import { OrdenesClienteComponent } from './ordenes-cliente/ordenes-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingClienteComponent,
    RegistroClienteComponent,
    FormPagoTcComponent,
    CategoriasEmpresasComponent,
    LoginComponent,
    EmpresasCategoriaSeleccionadaComponent,
    ProductosEmpresaSeleccionadaComponent,
    AnadiendoProductoCarritoComponent,
    CarritoCompraComponent,
    DireccionClienteComponent,
    OrdenesClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
