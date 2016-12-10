//更多操作 component

import 'rxjs/add/operator/switchMap';
import {Directive, Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


import { Tip } from './tip';
import { TipService } from './tip.service';
import { TodolistComponent } from './todo_list.component';


@Component({
    selector: 'more-oparetion',
    templateUrl: 'component/more_operation.component.html',
})

export class MoreOperationComponent implements OnInit{
    @Input() id:number;
    tips: Tip[] = [];
    tip: Tip;
    tipEdit:any;
    
   
    constructor(
        private tipService: TipService,
        private route: ActivatedRoute,
        private location: Location,
        private localStorageService: LocalStorageService
    ) { }

    //返回点击tip的id
    editDetail(){
        this.tipEdit = this.id;
        return this.tipEdit;
    }

    //删除tip
    deleteTip(){
        let tipId = this.id;
        this.tipService.deleteTip(tipId);
    }

   ngOnInit(): void {
        this.tipService.reNew().then(reNewTip => {
            this.tip = new Tip;
            this.tip.id = this.id;
      });
  }

}