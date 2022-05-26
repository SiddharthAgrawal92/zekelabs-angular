import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //normal way
    // const role = this.activatedRoute.snapshot.params['role'];
    // console.log('role', role);

    //using map
    // const role = this.activatedRoute.snapshot.paramMap.get('role');
    // const subRole = this.activatedRoute.snapshot.paramMap.get('subRole');
    // console.log('role', role);
    // console.log('subRole', subRole);

    //reactive way
    // this.activatedRoute.paramMap.subscribe(params => {
    //   console.log('role', params.get('role'));
    //   console.log('subRole', params.get('subRole'));
    // });

    //normal way
    // const name = this.activatedRoute.snapshot.queryParams['name'];
    // const year = this.activatedRoute.snapshot.queryParams['year'];

    //using map
    // const name = this.activatedRoute.snapshot.queryParamMap.get('name');
    // const year = this.activatedRoute.snapshot.queryParamMap.get('year');

    // console.log(name, year);

    //reactive way
    // this.activatedRoute.queryParamMap.subscribe(qParams => {
    //   console.log('name', qParams.get('name'));
    //   console.log('year', qParams.get('year'));
    // });

    //normal way
    // console.log('fragment:', this.activatedRoute.snapshot.fragment);

    //reactive way
    this.activatedRoute.fragment.subscribe(res => {
      console.log('fragment:', res);
    })

  }

  navigateToAboutComp() {
    this.route.navigate(['/about']);
  }

}
