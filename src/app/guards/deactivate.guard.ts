import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ContactComponent> {
  constructor() { }
  canDeactivate(component: ContactComponent) {
    const flag = confirm('Are you sure you want to go away from the page?');
    if (flag) {
      return true;
    } else {
      return false;
    }
  }
}
