import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageMotoristaComponent } from './pages/landing-page-motorista/landing-page-motorista.component';
import { LoginComponent } from './pages/login/login.component';
import { RequisitosComponent } from './pages/requisitos/requisitos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PedidosProgresoComponent } from './components/pedidos-progreso/pedidos-progreso.component';
import { PedidosEntregadosComponent } from './components/pedidos-entregados/pedidos-entregados.component';
import { PedidosDisponiblesComponent } from './components/pedidos-disponibles/pedidos-disponibles.component';
import { PedidosDetalleDisponiblesComponent } from './components/pedidos-detalle-disponibles/pedidos-detalle-disponibles.component';
import { PedidosDetalleProgresoComponent } from './components/pedidos-detalle-progreso/pedidos-detalle-progreso.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageMotoristaComponent,
    LoginComponent,
    RequisitosComponent,
    FormularioComponent,
    PedidosDisponiblesComponent,
    PedidosDetalleDisponiblesComponent,
    FacturaComponent,
    PedidosComponent,
    PedidosProgresoComponent,
    PedidosEntregadosComponent,
    NavbarComponent,
    PedidosDetalleProgresoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
