import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any = [{
    id: 1,
    empresa: "Ludo's Pizza",
    sucursal: "Torre Metropolis #214",
    categoria: "Restaurantes",
    nombre: "Pizza 4 Estaciones",
    precio: "Lps. 300",
    estado: "Activo"
  },
  {
    id: 2,
    empresa: "Distefano",
    sucursal: "City Mall Local #321",
    categoria: "Tiendas",
    nombre: "Skinny Jean Mujer",
    precio: "Lps. 1400",
    estado: "Activo"
  },
  {
    id: 3,
    empresa: "Farmacias Kielsa",
    sucursal: "Local #169",
    categoria: "Farmacias",
    nombre: "Sudagrip",
    precio: "Lps. 20",
    estado: "Inactivo"
},]

  constructor() { }

  ngOnInit(): void {
  }

}
