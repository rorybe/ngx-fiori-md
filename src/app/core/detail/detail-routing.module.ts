import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { PageNotFoundComponent } from '../../shared/pagenotfound/pagenotfound.component';

const detailRoutes: Routes = [
  { path: 'detail/:taskId', component: DetailComponent },
  { path: 'notfound', component: PageNotFoundComponent },
  // { path: '',   redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(detailRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DetailRoutingModule { }
