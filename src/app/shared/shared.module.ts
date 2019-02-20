import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MsToSecPipe } from './pipes/mstoSec.pipe';
import { FundamentalNgxModule } from 'fundamental-ngx';

@NgModule({
  declarations: [
    MsToSecPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FundamentalNgxModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MsToSecPipe
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
