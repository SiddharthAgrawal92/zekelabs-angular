import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContactMainComponent } from '../contact/contact-main/contact-main.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<ContactMainComponent> {
  constructor() {
  }

  canDeactivate(component: ContactMainComponent) {
    const flag = confirm('Are you sure you want to go away from the page?');
    return flag;
  }
}
