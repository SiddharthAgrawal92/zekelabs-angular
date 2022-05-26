import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(route: Route): boolean {

    let url: string = route.path;
    console.log('Url:' + url);
    // if (url == 'contact') {
    alert('You are not authorized to visit this page');
    return false;
    // }
    // return true;
  }
}
