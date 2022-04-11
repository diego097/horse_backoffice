import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  async canActivate() {
    //const tokenValid = await this.authService.validateCurrentUserToken();
    const tokenValid = this.authService.getCurrentUser();
    if (tokenValid.token) {
      console.log(tokenValid);
      console.log("token válido");
      return true;
    }
    else {
      console.log(tokenValid);
      console.log("Token inválido");
      this.router.navigate(['/auth']);
      return false;

    }
  }
  
}
