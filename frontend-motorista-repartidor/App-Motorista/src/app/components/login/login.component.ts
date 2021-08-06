import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ('modalAdvertencia') modalAdvertencia: any;
  faUndoAlt = faUndoAlt;
  motoristas: any = [];
  temporal: any = '';

  EmailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  logear = new FormGroup({
    usuario : new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.EmailPattern)]),
    password : new FormControl('',[Validators.required, Validators.minLength(8),])
  })

  constructor(private motoristasService:MotoristasService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  get usuario(){
    return this.logear.get('usuario');
  }

  get password(){
    return this.logear.get('password');
  }

  Verificar(){
    if (this.logear.valid) {
      this.motoristasService.obtenerMotoristas().subscribe(
        res=>{
          this.motoristas = res;
          for(let i = 0; i < this.motoristas.length; i++){
            if(this.motoristas[i].correo == this.logear.controls['usuario'].value && this.motoristas[i].password == this.logear.controls['password'].value 
            && this.motoristas[i].estado=="Activo"){
              this.router.navigate(['/pedidos']);
              this.temporal = "ok"
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
