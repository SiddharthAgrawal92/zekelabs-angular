import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  //   styles: [`
  //   .activeLink {
  //     background-color: brown;
  //     color: white;
  // }
  //   `]
})
export class SidebarComponent implements OnInit {

  menuList = [
    {
      text: 'Homepage',
      icon: 'home',
      routerLink: '/homepage'
    },
    {
      text: 'About',
      icon: 'account_balance',
      routerLink: '/about'
    },
    {
      text: 'Pipes',
      icon: 'vertical_align_top',
      routerLink: '/my-pipes'
    },
    {
      text: 'Contact',
      icon: '',
      children: [
        {
          text: 'Main Contact Page',
          icon: 'insert_emoticon',
          routerLink: '/contact'
        },
        {
          text: 'Admin Contact',
          icon: 'face',
          routerLink: '/contact/admin'
        }
      ]
    },
    {
      text: 'Template Form',
      icon: 'transform',
      routerLink: '/form'
    },
    {
      text: 'Internationalization (i18n)',
      icon: 'language',
      routerLink: '/i18n'
    },
    {
      text: 'Reactive Form',
      icon: '',
      children: [
        {
          text: 'Basic',
          icon: 'check_circle_outline',
          routerLink: '/reactive-form/basic'
        },
        {
          text: 'Advanced',
          icon: 'class',
          routerLink: '/reactive-form/advanced'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
