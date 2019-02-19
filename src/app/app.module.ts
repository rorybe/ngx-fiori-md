import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellbarComponent } from './shellbar/shellbar.component';
import { MasterComponent } from './master/master.component';
import { DetailModule } from './detail/detail.module';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskService } from './services/task.service';
import { TaskDueTextPipe } from './pipes/taskduetext.pipe';
import { TranslateService } from './services/translate.service';
import { TileComponent } from './tile/tile.component';
import { TaskprioritycolourDirective } from './directives/taskprioritycolour.directive';
import { environment } from '../environments/environment';
import { TaskduecolourDirective } from './directives/taskduecolour.directive';

export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ShellbarComponent,
    MasterComponent,
    TaskDueTextPipe,
    TaskprioritycolourDirective,
    TileComponent,
    TaskduecolourDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FundamentalNgxModule,
    FormsModule,
    DetailModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [TranslateService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
