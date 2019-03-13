import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputMockComponent } from './components/search-input.mock.component';
import { ShellbarLogoMockComponent } from './components/shellbar-logo.mock.component';
import { ProductMenuMockComponent } from './components/product-menu.mock.component';
import { ShellbarSubtitleMockComponent } from './components/shellbar-subtitle.mock.component';
import { CopilotMockComponent } from './components/copilot.mock.component';
import { ShellbarActionsMockComponent } from './components/shellbar-actions.mock.component';
import { ShellbarActionMockComponent } from './components/shellbar-action.mock.component';
import { ShellbarMockComponent } from './components/shellbar.mock.component';
import { LoadingSpinnerMockComponent } from './components/loading-spinner.mock.component';
import { PanelFiltersMockComponent } from './components/panel-filters.mock.component';
import { AppTileMockComponent } from './components/app-tile.mock.component';
import { SideNavListMockComponent } from './components/side-nav-list.mock.component';
import { SideNavMockComponent } from './components/side-nav.mock.component';
import { PanelBodyMockComponent } from './components/panel-body.mock.component';
import { PanelFooterMockComponent } from './components/panel-footer.mock.component';
import { PanelMockComponent } from './components/panel.mock.component';
import { ButtonMockComponent } from './components/button.mock.component';
import { TranslateService } from '../core/services/translate.service';
import { TranslateMockService } from './services/translate.mock.service';
import { TaskService } from '../core/services/task.service';
import { TaskMockService } from './services/task.mock.service';
import { AppMasterMockComponent } from './components/app-master.mock.component';
import { AppHeaderMockComponent } from './components/app-header.mock.component';
import { TileMediaMockComponent } from './components/tile-media.mock.component';
import { InputGroupMockComponent } from './components/input-group.mock.component';
import { TileContentMockComponent } from './components/tile-content.mock.component';
import { TileMockComponent } from './components/tile.mock.component';
import { InlineHelpMockComponent } from './components/inline-help.mock.component';
import { ActionBarTitleMockComponent } from './components/action-bar-title.mock.component';
import { ActionBarDescriptionMockComponent } from './components/action-bar-description.mock.component';
import { ActionBarHeaderMockComponent } from './components/action-bar-header.mock.component';
import { SecToMsMockPipe } from './pipes/secToMs.mock.pipe';
import { LabelMockComponent } from './components/label.mock.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FirestoreMock } from './services/firestore.mock.service';
import { ActionBarActionsMockComponent } from './components/action-bar-actions.mock.component';
import { ActionBarMockComponent } from './components/action-bar.mock.component';
import { AppInfoMockComponent } from './components/app-info.mock.component';
import { TabMockComponent } from './components/tab.mock.component';
import { AppCommentsMockComponent } from './components/app-comments.mock.component';
import { AppAttachmentsMockComponent } from './components/app-attachments.mock.component';
import { TabListMockComponent } from './components/tab-list.mock.component';
import { TableHeaderMockComponent } from './components/table-header.mock.component';
import { TableBodyMockComponent } from './components/table-body.mock.component';
import { TableMockComponent } from './components/table.mock.component';
import { TaskDueTextMockPipe } from './pipes/taskduetext.mock.pipe';
import { IconMockComponent } from './components/icon.mock.component';
import { TileTitleMockComponent } from './components/tile-title.mock.component';
import { SpanMockComponent } from './components/span.mock.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FirestoreCollectionMock } from './services/firestorecollection.mock.service';


@NgModule({
  imports: [CommonModule],
  exports: [
    SearchInputMockComponent,
    ShellbarLogoMockComponent,
    ProductMenuMockComponent,
    ShellbarSubtitleMockComponent,
    CopilotMockComponent,
    ShellbarActionsMockComponent,
    ShellbarActionMockComponent,
    ShellbarMockComponent,
    PanelFiltersMockComponent,
    LoadingSpinnerMockComponent,
    AppTileMockComponent,
    SideNavListMockComponent,
    SideNavMockComponent,
    PanelBodyMockComponent,
    PanelFooterMockComponent,
    PanelMockComponent,
    ButtonMockComponent,
    SpanMockComponent,
    AppMasterMockComponent,
    AppHeaderMockComponent,
    TileMediaMockComponent,
    InputGroupMockComponent,
    TileMockComponent,
    TileContentMockComponent,
    InlineHelpMockComponent,
    ActionBarTitleMockComponent,
    ActionBarDescriptionMockComponent,
    SecToMsMockPipe,
    TaskDueTextMockPipe,
    LabelMockComponent,
    ActionBarActionsMockComponent,
    ActionBarMockComponent,
    AppInfoMockComponent,
    TabMockComponent,
    AppCommentsMockComponent,
    AppAttachmentsMockComponent,
    TabListMockComponent,
    ActionBarHeaderMockComponent,
    TableHeaderMockComponent,
    TableBodyMockComponent,
    TableMockComponent,
    IconMockComponent,
    TileTitleMockComponent
  ],
  declarations: [
    SearchInputMockComponent,
    ShellbarLogoMockComponent,
    ProductMenuMockComponent,
    ShellbarSubtitleMockComponent,
    CopilotMockComponent,
    ShellbarActionsMockComponent,
    ShellbarActionMockComponent,
    ShellbarMockComponent,
    PanelFiltersMockComponent,
    LoadingSpinnerMockComponent,
    AppTileMockComponent,
    TileMockComponent,
    SideNavListMockComponent,
    SideNavMockComponent,
    PanelBodyMockComponent,
    PanelFooterMockComponent,
    PanelMockComponent,
    ButtonMockComponent,
    SpanMockComponent,
    AppMasterMockComponent,
    AppHeaderMockComponent,
    TileMediaMockComponent,
    InputGroupMockComponent,
    TileMockComponent,
    TileContentMockComponent,
    InlineHelpMockComponent,
    ActionBarTitleMockComponent,
    SecToMsMockPipe,
    TaskDueTextMockPipe,
    LabelMockComponent,
    ActionBarDescriptionMockComponent,
    ActionBarActionsMockComponent,
    ActionBarMockComponent,
    AppInfoMockComponent,
    TabMockComponent,
    AppCommentsMockComponent,
    AppAttachmentsMockComponent,
    TabListMockComponent,
    ActionBarHeaderMockComponent,
    TableHeaderMockComponent,
    TableBodyMockComponent,
    TableMockComponent,
    IconMockComponent,
    TileTitleMockComponent
  ],
  providers: [
    HttpClientTestingModule,
    {
      provide: TranslateService,
      useClass: TranslateMockService
    },
    {
      provide: AngularFirestore,
      useClass: FirestoreMock
    },
    {
      provide: AngularFirestoreCollection,
      useClass: FirestoreCollectionMock
    }
  ]
})
export class TestingModule { }
