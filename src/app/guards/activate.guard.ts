import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactMainComponent } from '../contact/contact-main/contact-main.component';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  component: ContactMainComponent;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    alert('You are not Authorized to view this page. \n Please Contact your admin!');
    return false;
  }

}
