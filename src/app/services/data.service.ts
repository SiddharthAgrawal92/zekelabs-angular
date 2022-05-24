import { Injectable } from '@angular/core';
import { MyModuleModule } from '../my-module/my-module.module';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private serverService: ServerService) { }

  getData() {
    this.serverService.doSomething();
    return [
      { name: 'Michael', profile: 'Software Engineer' },
      { name: 'Julian', profile: 'Data Scientist' },
      { name: 'Maria', profile: 'Quality Analyst' },
      { name: 'John', profile: 'Business Analyst' }
    ]
  }
}
