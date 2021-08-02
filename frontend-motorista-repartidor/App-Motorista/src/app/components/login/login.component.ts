import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUndoAlt = faUndoAlt;

  EmailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  logear = new FormGroup({
    usuario : new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.EmailPattern)]),
    password : new FormControl('',[Validators.required, Validators.minLength(8),])
  })

  constructor() { }

  ngOnInit(): void {
  }

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
  /*getEmail(event: Event){
    event.preventDefault();
    console.log(this.usuario.value);
  }*/
}
