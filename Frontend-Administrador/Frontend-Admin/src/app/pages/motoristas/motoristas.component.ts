import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MotoristasService } from 'src/app/services/motoristas.service';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {
motoristasTemporal: any = [];
motoristas:any=[];
motoristaModal:any=[];
estadoSeleccionado:any='Activo';
activo:any='Activo';
inactivo:any='Inactivo';

  constructor(private modalService:NgbModal, private motoristasService:MotoristasService, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("idAdmin");
    if(token == null){
      this.router.navigate(['/login']);
    }

    this.motoristasService.obtenerMotoristas().subscribe(
      res=>{
        this.motoristas = [];
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

  abrirVerMotorista(modal: any, motorista: any){
    this.modalService.open(modal,
      {
        size:'xs',
        centered:true
      });
      this.motoristaModal = motorista
  }

  abrirModalEditar(modal: any, motorista: any){
    this.modalService.open(modal,
      {
        size:'xs',
        centered:true
      })
      this.motoristaModal = motorista
  }

  editarMotorista(inputdni:any, inputCod: any, inputNom: any, inputApe: any, inputCor: any, inputTel: any, 
    inputDir: any, inputPas: any , inputEst: any, inputFor: any, inputDis: any ,inputDes: any ,inputPro: any){
    let data = {
      idMotorista : this.motoristaModal._id,
      codEmpleado : inputCod.value,
      dni : inputdni.value,
      nombre : inputNom.value,
      apellido : inputApe.value,
      correo : inputCor.value,
      telefono : inputTel.value,
      direccion : inputDir.value,
      password : inputPas.value,
      estadoCivil : inputEst.value,
      formacion : inputFor.value,
      discapacidad : inputDis.value,
      descripcion : inputDes.value,
      pasadoProfesional : inputPro.value,
      estado : this.estadoSeleccionado
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
    console.log(data)
  }

  inactivar(motorista: any){
    let data = {
      idMotorista : motorista._id,
      codEmpleado : motorista.codEmpleado,
      dni : motorista.dni,
      nombre : motorista.nombre,
      apellido : motorista.apellido,
      correo : motorista.correo,
      telefono : motorista.telefono,
      direccion : motorista.direccion,
      password : motorista.password,
      estadoCivil : motorista.estadoCivil,
      formacion : motorista.formacion,
      discapacidad : motorista.discapacidad,
      descripcion : motorista.descripcion,
      pasadoProfesional : motorista.pasadoProfesional,
      estado : "Inactivo"
    }

    this.motoristasService.actualizarMotoristas(data).subscribe(
      res=>{
        if(res.ok==1){
          this.ngOnInit();
          this.modalService.dismissAll(); 
        }
      },
      error=>console.log(error)
    )
  }
  
}
