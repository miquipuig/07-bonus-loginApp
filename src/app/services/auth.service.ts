import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyBZgKezW-d4XNxW37-TBFU7vNFS4N5rQtA';
  userToken: string;
  // Crer nuevos usuarios
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// Login
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient ) { }


  logout(){}

  login( usuario: UsuarioModel ){
    const authData = {
      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZgKezW-d4XNxW37-TBFU7vNFS4N5rQtA`,
      authData
    );
  } 

  nuevoUsuario( usuario: UsuarioModel){
    // const authData = {
    //   email: usuario.email,
    //   passwod: usuario.password,
    //   returnSecureToken: true
    // }

    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    // return this.http.post(
    //   `${ this.url }/signUp?key=${ this.apikey }`,
    //   authData
    // );
    //Solución para el CORS. Quizá se tendría que hacer DOM seguro...
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZgKezW-d4XNxW37-TBFU7vNFS4N5rQtA`,
      authData
    );

  
  }

  private guardarToken (idToken: string){
      this.userToke = idToken;
      localStorage.setItem('token', idToken);
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken='';
    }

    return this.userToken;
  }
}
