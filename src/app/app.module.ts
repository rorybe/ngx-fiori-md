import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MasterComponent } from './core/master/master.component';
import { DetailModule } from './core/detail/detail.module';
import { TaskService } from './core/services/task.service';
import { TaskDueTextPipe } from './shared/pipes/taskduetext.pipe';
import { TranslateService } from './core/services/translate.service';
import { TileComponent } from './core/tile/tile.component';
import { TaskprioritycolourDirective } from './core/directives/taskprioritycolour.directive';
import { environment } from '../environments/environment';
import { TaskduecolourDirective } from './core/directives/taskduecolour.directive';
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
        HeaderComponent,
        TaskduecolourDirective,
    ],
    exports: [],
    providers: [TranslateService, TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }
