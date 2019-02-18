import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';
import { AttachmentsComponent } from '../attachments/attachments.component';
import { InfoComponent } from '../info/info.component';

@NgModule({
  imports: [
    FundamentalNgxModule,
    FormsModule,
    CommonModule,
    DetailRoutingModule
  ],
  declarations: [
    DetailComponent,
    CommentsComponent,
    AttachmentsComponent,
    InfoComponent
  ]
})
export class DetailModule { }
