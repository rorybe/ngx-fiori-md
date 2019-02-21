import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { CommentsComponent } from '../comments/comments.component';
import { AttachmentsComponent } from '../attachments/attachments.component';
import { InfoComponent } from '../info/info.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    DetailRoutingModule,
    SharedModule,
    FundamentalNgxModule,
  ],
  declarations: [
    DetailComponent,
    CommentsComponent,
    AttachmentsComponent,
    InfoComponent
  ]
})
export class DetailModule { }
