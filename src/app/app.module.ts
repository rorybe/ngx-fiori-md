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
import { MsToSecPipe } from './shared/pipes/mstoSec.pipe';
import { TranslateService } from './services/translate.service';
import { TileComponent } from './tile/tile.component';
import { TaskprioritycolourDirective } from './directives/taskprioritycolour.directive';
import { environment } from '../environments/environment';
import { TaskduecolourDirective } from './directives/taskduecolour.directive';
import { SharedModule } from './shared/shared.module';

export const firebaseConfig = environment.firebase;

@NgModule({
  imports: [
    BrowserModule,
    DetailModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    SharedModule,
    FundamentalNgxModule
  ],
  declarations: [
    TaskDueTextPipe,
    TaskprioritycolourDirective,
    AppComponent,
    MasterComponent,
    TileComponent,
    ShellbarComponent,
    PageNotFoundComponent,
    TaskduecolourDirective,
  ],
  exports: [

  ],
  providers: [TranslateService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
