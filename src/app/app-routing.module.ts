import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './core/detail/detail.component';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { MasterComponent } from './core/master/master.component';

const routes: Routes = [
  {
    path: 'detail/:taskId', component: MasterComponent, children: [
      {
        path: '',
        component: DetailComponent
      }
    ]
  },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
