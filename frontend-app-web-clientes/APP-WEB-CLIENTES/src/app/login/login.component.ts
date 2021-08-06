import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../services/auth.service";
// Sweet Alert
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService 
    ) { }

  ngOnInit(): void {
     /*Borrando el token por si hay uno en el localstorage */
    // this.authService.logoutCliente();
  }

  
  EmailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  logear = new FormGroup({
    usuario : new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.EmailPattern)]),
    password : new FormControl('',[Validators.required, Validators.minLength(8),])
  })


  get usuario(){
    return this.logear.get('usuario');
  }

  get password(){
    return this.logear.get('password');
  }

  Verificar(){
    console.log(this.logear.value)
    console.log(this.logear.valid)
  }

  //Logueando un cliente
  loginCliente() {
    // Funcionalidad boton login
    const formData = this.logear.value;
    // console.log(formData);
    this.authService.loginCliente(formData)
      .subscribe(
        response => {
          console.log('Respuesta del servidor', response);
          if (response.mensaje == 'Cliente Logueado') {
            // Guardar token en localStorage
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('correoCliente', response.data.correoCliente);
            localStorage.setItem('nombreCliente',response.data.nombreCliente);
            // Mensaje success
            Swal.fire({
              title: '',
              text: '',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            }).then(success => {
              this.router.navigate(['/categorias']);
            }
            ).catch(err => console.log("error respuesta"));
          }
        },
        error => {
          console.log('error subcribe');
        }
      )
  }

}
