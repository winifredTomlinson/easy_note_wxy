//编辑页面component

import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { TIPS } from './mock_tips';


import { Tip } from './tip';
import { TipService } from './tip.service';
@Component({
    selector: 'my-app',
    templateUrl: 'edit_tip.component.html',
})
  export class EditTipComponent implements OnInit {
  // @Input() id:number;
  tips: Tip[] = [];
  tip: any;
  newTip: Tip;


  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location,
    private localStorageService: LocalStorageService
    
  ) { }


  //编辑页面不保存功能
  noSave(id: number){
    this.tip =  this.localStorageService.get('tip11');
    console.log(this.tip);
    this.tipService.noSave(id, this.tip);
  }

  //通过路由id获取tip
   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tipService.getTip(+params['id']))
      .subscribe(tip => {
      this.tip = tip;
      this.localStorageService.set('tip11',tip);        
      this.newTip =  this.tip;
      this.tip = tip;
      });
  }
}