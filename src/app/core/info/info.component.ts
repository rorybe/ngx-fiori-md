import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  Object = Object;
  loading$ = new BehaviorSubject<boolean>(true);
  tableRows;
  task: Task;
  finalise$: Subject<boolean> = new Subject();
  info$ = this.infoService.info$;
  tableItems$ = this.infoService.PurchaseOrderItems$;

  constructor(private infoService: InfoService) { }

}
