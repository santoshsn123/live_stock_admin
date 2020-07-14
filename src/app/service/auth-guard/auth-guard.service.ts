import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private router:Router) { }
  
  canActivate(): boolean {
    if (!localStorage.getItem('login-session')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
