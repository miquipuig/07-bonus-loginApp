import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    // this.usuario.email = 'mpuig22@gmail.com';
   }

   onSubmit( form: NgForm) {
    
    if (form.invalid) {return;}
     console.log('Formulario enviado');
     console.log(this.usuario);
     console.log(form);
   }


}
