import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToMs'
})
export class SecToMsPipe implements PipeTransform {

  transform(ms: number): number {
    return ms * 1000;
  }
}
