import { NgModule } from '@angular/core';
// import { nvD3 } from 'ng2-nvd3';
import { LocalStorageService, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { Ng2UeditorModule } from 'ng2-ueditor';

//引入各页面component
import { SignInComponent } from './component/sign_in.component/sign_in.component';
import { FileComponent } from './component/file.component/file.component';
import { FavoriteComponent } from './component/favoriteNotes.component/favoriteNotes.component';
import { AppComponent } from './app';
import { TodolistComponent } from './component/todo_list.component/todo_list.component';
import { TipDetailComponent } from './component/tip_detail.component/tip_detail.component';
import { EditTipComponent } from './component/edit_tip.component/edit_tip.component';
import { AddTipComponent } from './component/add_tip.component/add_tip.component';
import { MoreOperationComponent } from './component/more_operation.component/more_operation.component';
import { TreeComponent } from './component/tree.component/tree.component';
import { TreeItemComponent } from './component/tree.component/tree-item.component';



//服务
import { TipService } from './services/tip.service';
//路由
import { AppRoutingModule } from './app_routing.module';

let localStorageServiceConfig = {
  prefix: 'nk-app',
  storageType: 'sessionStorage'
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule,
    // Ng2UeditorModule
  ],
  declarations: [
    SignInComponent,
    FileComponent,
    FavoriteComponent,
    AppComponent,
    TodolistComponent,
    TipDetailComponent,
    EditTipComponent,
    AddTipComponent,
    MoreOperationComponent,
    TreeComponent,
    TreeItemComponent,
    // nvD3,
    // ChartsModule
  ],
  providers: [TipService, LocalStorageService, {
    provide: 'LOCAL_STORAGE_SERVICE_CONFIG', useValue: localStorageServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }