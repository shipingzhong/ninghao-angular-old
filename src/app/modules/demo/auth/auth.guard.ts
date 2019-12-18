import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {
  
  constructor(private authService:AuthService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('Auth guard');
      //  return true;  //返回true 就能够打开使用了这个guard的路由,返回false就不能打开使用了这个guard的路由
      if(this.authService.isLoggedIn){
         return true;
      }
      this.router.navigate(['/demo/login']);
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //throw new Error("Method not implemented.");
    console.log('Auth guard canActivatedChild');
    return true;
  }
  
}
