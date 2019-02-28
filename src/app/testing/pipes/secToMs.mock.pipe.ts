import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToMs'
})
export class SecToMsMockPipe implements PipeTransform {

  transform(ms: number) {}
}
