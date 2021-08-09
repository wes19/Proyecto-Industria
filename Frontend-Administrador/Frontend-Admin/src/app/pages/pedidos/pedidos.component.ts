import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidosDisponibles:any=[{
    imagen:"../assets/img/motoristas/img11.jpg",
    empresa: "Asados el Churrasco",
    card: "Acepta pago Online",
    ubicacion: "La Haya",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70"
  },
  {
    imagen:"../assets/img/motoristas/img13.jpg",
    empresa: "Denny's",
    card: "Acepta pago Online",
    ubicacion: "Centro America",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70" 
  },
  {
    imagen:"../assets/img/motoristas/img10.jpg",
    empresa: "Punto Farma",
    card: "Acepta pago Online",
    ubicacion: "Carrizal",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70" 
  },
  {
    imagen:"../assets/img/motoristas/img12.jpg",
    empresa: "Despensa Familiar",
    card: "Acepta pago Online",
    ubicacion: "Cerro Grande",
    tiempoEstimado: "30-45 Min",
    comisionMotorista: "Lps. 70" 
  }
  ];

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  abrirVerPedido(modal: any){
    this.modalService.open(modal,
      {
        size:'xs',
        centered:true
      });
  }
}
