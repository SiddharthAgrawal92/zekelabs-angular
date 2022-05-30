import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(myValue: any, firstName: boolean, lastName: boolean): any {
    const values = myValue.split(' ');
    if (firstName == false && lastName == false) {
      return myValue;
    }
    if (firstName) {
      return values[0];
    } if (lastName && values.length == 2) {
      return values[1];
    } else {
      return values[0];
    }
  }

}

@Pipe({
  name: 'fileSize'
})
export class GetSize implements PipeTransform {
  transform(value: any, format = 'MB') {
    return (value / (1024 * 1024)).toFixed(2) + (format ? (' ' + format) : '');
  }
}
