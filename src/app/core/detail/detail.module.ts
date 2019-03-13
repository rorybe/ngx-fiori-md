import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { CommentsComponent } from '../comments/comments.component';
import { AttachmentsComponent } from '../attachments/attachments.component';
import { InfoComponent } from '../info/info.component';
import { SharedModule } from '../../shared/shared.module';
import { PageNotFoundComponent } from '../../shared/pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    SharedModule,
    FundamentalNgxModule,
  ],
  declarations: [
    DetailComponent,
    CommentsComponent,
    AttachmentsComponent,
    InfoComponent,
    PageNotFoundComponent
  ]
})
export class DetailModule { }
