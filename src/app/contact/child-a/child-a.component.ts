import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  navigateToChildB() {
    this.route.navigate(['../child-b'], { relativeTo: this.activatedRoute });
    this.route.navigate(['../child-b'], { relativeTo: this.activatedRoute });
  }

}
