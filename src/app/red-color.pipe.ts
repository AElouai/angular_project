import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redColor'
})
export class RedColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('green', 'red');
  }

}
