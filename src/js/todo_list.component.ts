// tips 列表component

import {Directive, Component, OnInit,Input} from '@angular/core';

import { Tip } from './tip';
import { TipService } from './tip.service';

@Component({
  selector: 'my-app',
  templateUrl: '/todo_list.component.html',
})

export class TodolistComponent implements OnInit {
  // @Input() id:number;
  tips: Tip[] = [];
  tip: Tip;
  a:any;
  editId: number;
  constructor(private tipService: TipService) { }
  
  getId(id: number): void{
    this.editId = id;
  }
//新增tip功能
  reNew(){
    this.tipService.reNew();
  }

//已完成或未完成功能
  clickCheckBox(id: number){
    this.tipService.clickCheckBox(id);
  }
//获取tips列表
  ngOnInit(): void{
    this.tipService.getTips().then(tips => {this.tips = tips;    
      });     
  }
}