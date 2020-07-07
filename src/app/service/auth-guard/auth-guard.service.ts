import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private router:Router) { }
  
  canActivate(): boolean {
    if (!localStorage.getItem('login-session')) {
      this.router.navigate(['/authentication/login/with-bg-image']);
      return false;
    }
    return true;
  }

}
