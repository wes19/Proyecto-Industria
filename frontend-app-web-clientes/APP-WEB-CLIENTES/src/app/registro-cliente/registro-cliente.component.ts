import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  formularioRegistroCliente:any;
  formularioConfirmCliente: any;
  correoClienteDuplicado: boolean=false;
  constructor(
    private router : Router,
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.formularioRegistroCliente.reset();
  }

  createForm() {
    this.formularioRegistroCliente = this.fb.group({
      nombreCliente: ['', [Validators.required,Validators.minLength(5)]],
      correoCliente: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contrasenaCliente: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get nombreCliente() {
    return this.formularioRegistroCliente.get('nombreCliente');
  }
   get correoCliente() {
    return this.formularioRegistroCliente.get('correoCliente');
  }
  get contrasenaCliente() {
    return this.formularioRegistroCliente.get('contrasenaCliente');
  }

  cambiarInput(input: any): any {
    console.log('entrando a cambiar tipo de input');
    input.type = input.type === 'password' ? 'text' : 'password';
  }

    /*registrarCliente */
    registrarCliente(){
      const formData = {
        nombreCliente: this.nombreCliente.value,
        correoCliente: this.correoCliente.value,
        contrasenaCliente: this.contrasenaCliente.value,
      };

      this.authService.registrarCliente(formData)
      .subscribe(
        response => {
          console.log('Respuesta del servidor', response);
          if (response.mensaje == "Registrado") {
            this.correoClienteDuplicado = true;
            // Mensaje success
            Swal.fire({
              title: 'Registro exitoso, Por favor logueese',
              text: 'Redireccionando en 2 segundos',
              icon: 'success',
              timer: 3000,
              showConfirmButton: false
            }).then(success => {
              // window.location.href = '/company/home';
              this.router.navigate(['/login']);
            }
            ).catch(err => {
              console.log(err);
            }) 
          }else{
            Swal.fire({
              title: 'El correo que ingresó ya existe, por favor ingrese otro!',
              text: 'Redireccionando en 2 segundos',
              icon: 'error',
              timer: 2000,
              showConfirmButton: false
            }).then(success => {
              // window.location.href = '/company/home';
              this.formularioRegistroCliente.reset();
              this.router.navigate(['/registro']);
            }
            ).catch(err => {
              console.log(err);
            }) 
          }
          
        },
        error => {
          console.log(error);
      }) ;


    }



  navegandoHaciaLogin(){
    this.router.navigate(['/login']);
  }

}
