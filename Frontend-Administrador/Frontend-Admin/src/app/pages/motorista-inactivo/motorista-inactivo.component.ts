import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MotoristasService } from 'src/app/services/motoristas.service';

@Component({
  selector: 'app-motorista-inactivo',
  templateUrl: './motorista-inactivo.component.html',
  styleUrls: ['./motorista-inactivo.component.css']
})
export class MotoristaInactivoComponent implements OnInit {
  motoristasTemporal: any = [];
  motoristas:any=[];
  motoristaModal:any=[];
  estadoSeleccionado:any='Inactivo';
  activo:any="Activo";
  inactivo:any="Inactivo";

  constructor(private modalService:NgbModal,private motoristasService:MotoristasService) { }

  
  ngOnInit(): void {
    this.motoristasService.obtenerMotoristas().subscribe(
      res=>{
        this.motoristasTemporal = res;
        this.motoristas = [];
        for(let i = 0; i < this.motoristasTemporal.length; i++){
          if(this.motoristasTemporal[i].estado == 'Inactivo'){
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

  activar(motorista: any){
    let data = {
      idMotorista : motorista._id,
      codEmpleado : motorista.value,
      dni : motorista.dni,
      nombre : motorista.nombre,
      apellido : motorista.apellido,
      correo : motorista.correo,
      telefono : motorista.telefono,
      direccion : motorista.direccion,
      password : motorista.value,
      estadoCivil : motorista.estadoCivil,
      formacion : motorista.formacion,
      discapacidad : motorista.discapacidad,
      descripcion : motorista.descripcion,
      pasadoProfesional : motorista.pasadoProfesional,
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



