import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !! localStorage.getItem('accesstoken');
    console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log("Authenticated");
      return true; 
    }
    console.log(" Not Authenticated");
    this.router.navigate(['']);
    return false; 
  }
}
