import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { ShellbarComponent } from './shellbar/shellbar.component';
import { MasterComponent } from './master/master.component';
import { DetailModule } from './detail/detail.module';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TaskService } from './services/task.service';
import { TaskDueTextPipe } from './pipes/taskduetext.pipe';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './services/translate.service';
import { TileComponent } from './tile/tile.component';
import { TaskduecolourPipe } from './pipes/taskduecolour.pipe';
import { TaskpriorityPipe } from './pipes/taskpriority.pipe';
import { CommentsComponent } from './comments/comments.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { InfoComponent } from './info/info.component';

export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ShellbarComponent,
    MasterComponent,
    TaskDueTextPipe,
    TileComponent,
    TaskduecolourPipe,
    TaskpriorityPipe
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
  providers: [TranslateService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
