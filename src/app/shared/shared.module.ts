import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecToMsPipe } from './pipes/SecToMs.pipe';
import { FundamentalNgxModule } from 'fundamental-ngx';

@NgModule({
  declarations: [
    SecToMsPipe
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
    SecToMsPipe
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
