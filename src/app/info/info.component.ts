import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  column1SortDir;
  dateSortDir;
  tableRows;
  sortColumn1;
  sortDate;

  constructor() { }

  ngOnInit() {
  }

}
