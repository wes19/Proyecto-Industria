import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
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
    pasadoProfesional : new FormControl(''),
  })
  constructor() { }

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
  get pasadoProfesional(){return this.formularioPeticion.get('pasadoProfesional')}

  EnviarFormulario(){
    console.log(this.formularioPeticion.value)
    console.log(this.formularioPeticion.valid)
  }

}
