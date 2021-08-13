import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peticiones-empleo',
  templateUrl: './peticiones-empleo.component.html',
  styleUrls: ['./peticiones-empleo.component.css']
})
export class PeticionesEmpleoComponent implements OnInit {
peticiones:any= []
peticionTemporal: any = [];
peticionModal:any= [];

  constructor(private modalService:NgbModal, private motoristasService:MotoristasService, private router: Router,) { }

  ngOnInit(): void {
    let token = localStorage.getItem("idAdmin");
    if(token == null){
      this.router.navigate(['/login']);
    }

    this.motoristasService.obtenerMotoristas().subscribe(
      res=>{
        this.peticionTemporal = res;
        this.peticiones = [];
        for(let i = 0; i < this.peticionTemporal.length; i++){
          if(this.peticionTemporal[i].estado == "Pendiente"){
            this.peticiones.push(this.peticionTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
  }

  abrirVerPeticion(modal: any, peticion: any){
    this.modalService.open(modal,
      {
        size:'xs',
        centered:true
      });
      this.peticionModal = peticion
  }

  rechazar(peticion: any){
    this.motoristasService.eliminarMotoristas(peticion._id).subscribe(
      res=>{
        if(res.ok==1){
          console.log(res.ok)
          this.ngOnInit();
        }
      },
      error=>console.log(error)
    )
  }

  contratar(peticionModal : any, inputCod : any, inputPas : any){
    let data = {
      idMotorista : peticionModal._id,
      codEmpleado : inputCod.value,
      dni : peticionModal.dni,
      nombre : peticionModal.nombre,
      apellido : peticionModal.apellido,
      correo : peticionModal.correo,
      telefono : peticionModal.telefono,
      direccion : peticionModal.direccion,
      password : inputPas.value,
      estadoCivil : peticionModal.estadoCivil,
      formacion : peticionModal.formacion,
      discapacidad : peticionModal.discapacidad,
      descripcion : peticionModal.descripcion,
      pasadoProfesional : peticionModal.pasadoProfesional,
      estado : "Activo"
    }

    this.motoristasService.actualizarMotoristas(data).subscribe(
      res=>{
        if(res.ok==1){
          console.log(res.ok)
          this.ngOnInit();
          this.modalService.dismissAll(); 
        }
      },
      error=>console.log(error)
    )
  }
  
}
