import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageMotoristaComponent } from './components/landing-page-motorista/landing-page-motorista.component';
import { LoginComponent } from './components/login/login.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PedidosProgresoComponent } from './components/pedidos-progreso/pedidos-progreso.component';
import { PedidosEntregadosComponent } from './components/pedidos-entregados/pedidos-entregados.component';
import { PedidosDisponiblesComponent } from './components/pedidos-disponibles/pedidos-disponibles.component';
import { PedidosDetalleDisponiblesComponent } from './components/pedidos-detalle-disponibles/pedidos-detalle-disponibles.component';
import { PedidosDetalleProgresoComponent } from './components/pedidos-detalle-progreso/pedidos-detalle-progreso.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
