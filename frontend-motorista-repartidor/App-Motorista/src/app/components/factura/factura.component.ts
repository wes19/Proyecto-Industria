import { Component, OnInit, ViewChild } from '@angular/core';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { PedidosService } from 'src/app/services/pedidos.service';
import {formatDate } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  @ViewChild ('modalAdvertencia') modalAdvertencia: any;
  today = new Date();
  jstoday: any = '';
  faUndoAlt = faUndoAlt;
  pedido: any = [];
  arregloPedidos: any = [];
  arrNombreproducto : any = [];
  arrPrecioproducto : any = [];
  arrCantidad : any = [];

  constructor(private pedidosService:PedidosService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("idMotorista");
    if(token == null){
      this.router.navigate(['/login']);
    }

    this.pedido = this.pedidosService.grabarPedido;
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    
    this.arrCantidad = this.pedido.cantidad;
    this.arrNombreproducto = this.pedido.producto;
    this.arrPrecioproducto = this.pedido.precio;

    for(let i = 0; i < this.arrCantidad.length; i++){
      let cant = this.arrCantidad[i]
      var prod = this.arrNombreproducto[i]
      var price = this.arrPrecioproducto[i]

      const jsonPedido = {
        cantidadProducto : cant,
        nombreProducto : prod,
        precioProducto : price
      }    
      this.arregloPedidos.push(jsonPedido)
    }
  }

  guardarFactura(){
    this.pedido.estado = "entregada";
    this.pedidosService.actualizarPedido(this.pedido._id, this.pedido.estado, this.pedido.idMotorista).subscribe(
      res=>{
        if(res.ok==1){
          this.modalService.open(this.modalAdvertencia, {size: 'sm', centered:true});
          this.router.navigate(['/pedidos']);
        }
      },
      error=>console.log(error)
    )
    console.log()
    }
  
}


