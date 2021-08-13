import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild ('modalAdvertencia') modalAdvertencia: any;
  faUndoAlt = faUndoAlt;

  EmailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  formularioPeticion = new FormGroup({
    dni : new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(/^\d{4}-?\d{4}-?\d{5}$/)]), 
    nombre : new FormControl('', [Validators.required]), 
    apellido : new FormControl('', [Validators.required]),
    correo : new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.EmailPattern)]),
    telefono : new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/), Validators.maxLength(8)],),
    fechaNacimiento : new FormControl('', [Validators.required]),
    direccion : new FormControl('', [Validators.required]),
    estadoCivil : new FormControl('', [Validators.required]),
    formacion : new FormControl('', [Validators.required]),
    discapacidad : new FormControl(''),
    descripcionDiscapacidad : new FormControl(''),
    pasadoProfesional : new FormControl(''),
  })
  constructor(private modalService: NgbModal,private motoristasService:MotoristasService, private router: Router) { }

  ngOnInit(): void {
  }

  get dni(){return this.formularioPeticion.get('dni')}
  get nombre(){return this.formularioPeticion.get('nombre')}
  get apellido(){return this.formularioPeticion.get('apellido')}
  get correo(){return this.formularioPeticion.get('correo')}
  get telefono(){return this.formularioPeticion.get('telefono')}
  get fechaNacimiento(){return this.formularioPeticion.get('fechaNacimiento')}
  get direccion(){return this.formularioPeticion.get('direccion')}
  get estadoCivil(){return this.formularioPeticion.get('estadoCivil')}
  get formacion(){return this.formularioPeticion.get('formacion')}
  get discapacidad(){return this.formularioPeticion.get('discapacidad')}
  get descripcionDiscapacidad(){return this.formularioPeticion.get('descripcionDiscapacidad')}
  get pasadoProfesional(){return this.formularioPeticion.get('pasadoProfesional')}
    
  enviarFormulario() {
    console.log('guardar');
    const data = {
      dni : this.formularioPeticion.controls['dni'].value,
      nombre : this.formularioPeticion.controls['nombre'].value,
      apellido : this.formularioPeticion.controls['apellido'].value,
      correo : this.formularioPeticion.controls['correo'].value,
      telefono : this.formularioPeticion.controls['telefono'].value,
      fechaNacimiento : this.formularioPeticion.controls['fechaNacimiento'].value,
      direccion : this.formularioPeticion.controls['direccion'].value,
      estadoCivil : this.formularioPeticion.controls['estadoCivil'].value,
      formacion : this.formularioPeticion.controls['formacion'].value,
      discapacidad : this.formularioPeticion.controls['discapacidad'].value,
      descripcionDiscapacidad : this.formularioPeticion.controls['descripcionDiscapacidad'].value,
      pasadoProfesional : this.formularioPeticion.controls['pasadoProfesional'].value
    }
    console.log(data)
    if (this.formularioPeticion.valid) {
    this.motoristasService.guardarMotorista(data
    ).subscribe(
      res=>{
        console.log(res);
        this.modalService.open(this.modalAdvertencia, {size: 'sm', centered:true});
        this.router.navigate(['/']);  
      },
      error=>console.log(error)
    ) 
    }
  }
}
