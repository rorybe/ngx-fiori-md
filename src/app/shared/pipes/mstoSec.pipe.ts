import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToSec'
})
export class MsToSecPipe implements PipeTransform {

  transform(ms: number): number {
    return ms * 1000;
  }
}
