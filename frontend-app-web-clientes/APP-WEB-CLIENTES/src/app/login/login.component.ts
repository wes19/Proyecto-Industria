import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegandoHaciaCategoriasEmpresas(){
    this.router.navigate(['/categorias-empresas']);
  }

}
