import { NgModule }                 from '@angular/core';
import { LocalStorageService, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import {NgbModule}                  from '@ng-bootstrap/ng-bootstrap';

//引入各页面component
import { AppComponent }             from './app.component';
import { TodolistComponent }        from './todo_list.component';
import { TipDetailComponent }       from './tip_detail.component';
import { EditTipComponent }         from './edit_tip.component';
import { AddTipComponent }          from './add_tip.component';
import { MoreOperationComponent }   from './more_operation.component';
//服务
import { TipService }               from './tip.service';
//路由
import { AppRoutingModule }         from './app_routing.module';

let localStorageServiceConfig = {
    prefix: 'my-app',
    storageType: 'sessionStorage'
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TodolistComponent,
    TipDetailComponent,
    EditTipComponent,
    AddTipComponent,
    MoreOperationComponent,
  ],
  providers: [ TipService,LocalStorageService ,   {
            provide: 'LOCAL_STORAGE_SERVICE_CONFIG', useValue: localStorageServiceConfig
        }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }