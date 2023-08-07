import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDNIS'
})
export class USDNISPipe implements PipeTransform {

  transform(value:number ): number {
    return value / 3.5;
  }

}
