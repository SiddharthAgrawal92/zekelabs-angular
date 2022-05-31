import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GetSize } from 'src/app/custom-pipes/my.pipe';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  myDate: Date;
  myValue = '1210.103810830';
  fileSize = 21024220;
  fileSizeConvertedValue: string;
  // observable = of('Hello from an Observable').pipe(delay(3000));
  observable: Observable<any>;
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bingo! Your promise has been resolved. Thanks :)');
    }, 3000)
  });

  constructor(
    private percentagePipe: PercentPipe,
    private getSize: GetSize,
    private apiHttpService: ApiHttpService
  ) {
    this.myValue = this.percentagePipe.transform(this.myValue, '3.3-5');
    this.fileSizeConvertedValue = this.getSize.transform(this.fileSize);
  }

  ngOnInit() {
    this.observable = this.apiHttpService.getData();
    let setDate = () => {
      setTimeout(() => {
        this.myDate = new Date();
        setDate();
      }, 1000)
    }
    setDate();
  }

}
