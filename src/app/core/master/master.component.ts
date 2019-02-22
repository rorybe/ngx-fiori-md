import { Component, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TranslateService } from '../services/translate.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../models/Task.model';

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnDestroy {

    loading$ = new BehaviorSubject<boolean>(true);

    //   showMaster$ = this.taskService.

    searchTerm = '';
    taskList: Task[];
    taskListSearchResults: Task[] = [];
    sorted = false;

    taskList$ = this.taskService.taskList$.pipe(map(tl => {
        if (tl) {
            this.taskListSearchResults = tl;
            this.taskList = tl;
            this.loading$.next(false);
            return tl;
        }
    }));

    constructor(
        private taskService: TaskService,
        private translate: TranslateService
    ) { }

    onSearchModelChange(): void {
        this.taskListSearchResults = this.taskList.filter(task =>
            task.taskTitle.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }

    get translatedTexts() {
        return this.translate.i18n;
    }

    onSort(): boolean | void {
        if (!this.sorted) {
            this.taskListSearchResults = this.taskList.sort((a, b) =>
                a.completionDeadLine.seconds -
                b.completionDeadLine.seconds
            );
            return this.sorted = true;
        }
        this.taskListSearchResults = this.taskList.reverse();
    }

    ngOnDestroy() {
        this.taskService.unsubscribeServices();
    }
}
