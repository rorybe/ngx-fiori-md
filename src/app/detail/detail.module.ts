import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FundamentalNgxModule,
    FormsModule,
    CommonModule,
    DetailRoutingModule
  ],
  declarations: [
    DetailComponent
  ]
})
export class DetailModule { }
