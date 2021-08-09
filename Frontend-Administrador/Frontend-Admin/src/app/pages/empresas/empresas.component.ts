import { Component, OnInit } from '@angular/core';
import { createRegularExpressionLiteral } from 'typescript';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any = [{
    id: 1,
    tienda: "Ludo's Pizza",
    direccion: "Colonia El Pedregal casa #214",
    nombreEncargado: "Kakashi Hatake",
    telefono: "+504 3232-3232",
    descripcion: "Pizzeria y aperitivos",
    estado: "Activo",
    categoria: "Restaurantes",
    logotipo: "img/restaurantes/ludos.jpg",
    banner: "img/ludos/banner.jpg"
  },
  {
    id: 2,
    tienda: "Farmacias Kielsa",
    direccion: "Colonia El Pedregal casa #214",
    nombreEncargado: "Monkey D. Luffy",
    telefono: "+504 3232-3232",
    descripcion: "Drogueria y Farmacia",
    estado: "Activo",
    categoria: "Farmacias",
    logotipo: "img/restaurantes/kielsa.jpg",
    banner: "img/ludos/banner.jpg"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
