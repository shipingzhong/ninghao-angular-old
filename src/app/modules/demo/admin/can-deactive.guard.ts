import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<any> {
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):  boolean {
    // throw new Error("Method not implemented.");
    console.log('Can deactivate guard');
    // return false;
    return component.canDeactivate();
    // return true;
  }
  
}
