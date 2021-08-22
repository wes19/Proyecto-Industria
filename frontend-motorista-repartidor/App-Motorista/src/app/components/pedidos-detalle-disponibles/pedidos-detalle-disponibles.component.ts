import { Component, ViewChild, OnInit } from '@angular/core';
import { faCreditCard, faMapMarkerAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos-detalle-disponibles',
  templateUrl: './pedidos-detalle-disponibles.component.html',
  styleUrls: ['./pedidos-detalle-disponibles.component.css']
})
export class PedidosDetalleDisponiblesComponent implements OnInit {
  @ViewChild ('modalConfirmacion') modalConfirmacion: any;
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  faUndoAlt = faUndoAlt;
  pedidosDetalles : any = [];
  idMotorista : any;
  
  constructor(private router: Router, private pedidosService:PedidosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    let token = localStorage.getItem("idMotorista");
    if(token == null){
      this.router.navigate(['/login']);
    }
    this.pedidosDetalles = this.pedidosService.storage
  }

  navegandoPedidosD(){
    this.router.navigate(['/pedidos']);
  }

  tomarOrden(order: any){
    this.idMotorista = localStorage.getItem("idMotorista");
    order.estado = "Tomada"; 
    this.pedidosService.actualizarPedido(order._id, order.estado, this.idMotorista).subscribe(
      res=>{
        if(res.ok == 1){
          this.modalService.open(this.modalConfirmacion, {size: 'sm', centered:true});
          this.router.navigate(['/pedidos']);
        }
      },
      error=>console.log(error)
    )
    console.log()
  }

  salir(){
    localStorage.removeItem("idMotorista");
    this.router.navigate(['/login']);
  }
}
