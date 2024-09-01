import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainPage'
})
export class MainPagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
