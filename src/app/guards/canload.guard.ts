import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements CanLoad {
  canLoad(route: Route) {
    const url = route.path;
    // if (url == 'contact') {
    //   alert('You do not have permission to view this page. Contact your admin!');
    //   return false;
    // }
    return true;
  }
}
