import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from 'src/app/services/pedidos.service';
import { faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @ViewChild ('modalAdvertencia') modalAdvertencia: any;
  faCreditCard = faCreditCard;
  faMapMarkerAlt = faMapMarkerAlt;
  pedidos: any = [];
  pedidosTemporal: any = [];
  order: any = [];
  motoristaSeleccionado: any = [];
  motoristasTemporal: any = [];
  motoristas: any = [];

  constructor(private modalService:NgbModal, private pedidosService:PedidosService, 
    private motoristasService:MotoristasService, private router: Router) {
    this.motoristasService.obtenerMotoristas().subscribe(
      res=>{
        this.motoristasTemporal = res;
        for(let i = 0; i < this.motoristasTemporal.length; i++){
          if(this.motoristasTemporal[i].estado == 'Activo'){
            this.motoristas.push(this.motoristasTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
   }

  ngOnInit(): void {
    let token = localStorage.getItem("idAdmin");
    if(token == null){
      this.router.navigate(['/login']);
    }

    this.pedidosService.obtenerPedidos().subscribe(
      res=>{
        this.pedidos = [];
        this.pedidosTemporal = res;
        for(let i = 0; i < this.pedidosTemporal.length; i++){
          if(this.pedidosTemporal[i].estado == "Pendiente"){
            this.pedidos.push(this.pedidosTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
    console.log()

  }

  abrirVerPedido(modal: any, pedido: any){
    this.modalService.open(modal,
      {
        size:'xs',
        centered:true
      });

      this.order = pedido;
  }

  asignar(){
    this.order.estado = "Tomada"
    this.pedidosService.actualizarPedido(this.order._id, this.order.estado, this.motoristaSeleccionado).subscribe(
      res=>{
        if(res.ok == 1){
          this.ngOnInit();
          this.modalService.dismissAll();
         //this.modalService.open(this.modalAdvertencia, {size: 'sm', centered:true});
        }
      },
      error=>console.log(error)
    )
    console.log()
  }

  cargarMotoristas(){
    
  }
}
