import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ('modalAdvertencia') modalAdvertencia: any;
  administradores: any = [];
  temporal: any = '';

  EmailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginAdmin = new FormGroup({
    correo : new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.EmailPattern)]),
    password : new FormControl('',[Validators.required, Validators.minLength(8),])
  })
  constructor(private administradoresService:AdministradoresService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  get correo(){
    return this.loginAdmin.get('correo');
  }

  get password(){
    return this.loginAdmin.get('password');
  }

  Verificar(){
      if (this.loginAdmin.valid) {
      this.administradoresService.obtenerAdministradores().subscribe(
        res=>{
          this.administradores = res;
          for(let i = 0; i < this.administradores.length; i++){
            if(this.administradores[i].correo == this.loginAdmin.controls['correo'].value && this.administradores[i].password == this.loginAdmin.controls['password'].value){
              this.router.navigate(['/menu']);
              this.temporal = "ok";
            }
          }
          if(this.temporal == ''){
            this.modalService.open(this.modalAdvertencia, {size: 'sm', centered:true});
          } 
        },
        error=>console.log(error)
      )
    }
  }

}
