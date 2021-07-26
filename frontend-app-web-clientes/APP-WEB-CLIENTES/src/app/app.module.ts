import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingClienteComponent } from './landing-cliente/landing-cliente.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingClienteComponent,
    RegistroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
