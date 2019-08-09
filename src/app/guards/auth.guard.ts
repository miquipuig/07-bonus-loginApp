import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private auth: AuthService, private router: Router){}

  canActivate(): boolean {
    
    if(this.auth.estaAutenticado()){
        return true;
    }else{
      console.log('Autentificación no superada');
        this.router.navigateByUrl('login');
        return false;
    }

  }

}
