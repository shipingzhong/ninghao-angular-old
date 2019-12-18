import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy{

  // preload(route: import("@angular/router").Route, fn: () => import("rxjs").Observable<any>): import("rxjs").Observable<any> {
  //   throw new Error("Method not implemented.");
  // }
  preload(
    route: Route, 
    load: () => Observable<any>):Observable<any> {
     if(route.data && route.data.preload){
       console.log('Preload:',route.path);
       return load();
     }else{
       return of(null)
     }
  }

  constructor() { }
}
