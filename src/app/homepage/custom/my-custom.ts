import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-custom',
  templateUrl: 'my-custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.info(`My Custom Component Info: Your app is running on PORT - ${window.location.host.split(':')[1]}`);
    this.loggerService.warn('My Custom Component Warn: Beware of fraudster 3rd party sites!');
    this.loggerService.error('My Custom Component Error: Oops! Some hack has happened!');
  }

}
