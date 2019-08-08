import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.models';

import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService) { }

  ngOnInit() {

  }

  login( form: NgForm){
    if (form.invalid) {return;}
    // console.log('Imprimir si el formulario es válido');
     this.auth.login(this.usuario)
     .subscribe(resp=>{
        console.log(resp);
     }, (err)=>{
       console.log(err.error.error.message);
     });

  }
   
  

}
