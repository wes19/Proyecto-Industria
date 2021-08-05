import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RouterModule } from '@angular/router';
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingClienteComponent, data: { title: 'Delivery' } },
      { path: 'login', component: LoginComponent, data: { title: 'Delivery - Login Cliente' } },
      { path: 'registro', component: RegistroClienteComponent, data: { title: 'Delivery - Registro Cliente' } },

    ])
  ],
  providers: [
    Title,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
