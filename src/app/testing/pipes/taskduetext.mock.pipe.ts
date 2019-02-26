import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'taskduetext'
})
export class TaskDueTextMockPipe implements PipeTransform {
    transform(ms: number) { }
}
