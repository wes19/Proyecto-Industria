import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MotoristasComponent } from './pages/motoristas/motoristas.component';
import { PeticionesEmpleoComponent } from './pages/peticiones-empleo/peticiones-empleo.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MotoristaInactivoComponent } from './pages/motorista-inactivo/motorista-inactivo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NavbarComponent,
    EmpresasComponent,
    ProductosComponent,
    MotoristasComponent,
    PeticionesEmpleoComponent,
    PedidosComponent,
    MotoristaInactivoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
