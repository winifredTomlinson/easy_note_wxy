// 添加tip

import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '../../common/modal_backdrop';
import { MaterialModule } from '@angular/material';
import { Tip } from '../../common/tip';
import { TipService } from '../../services/tip.service';
import { TodolistComponent } from '../todo_list.component/todo_list.component';
@Component({
  selector: 'add-tip',
  templateUrl: 'app/component/add_tip.component/add_tip.component.html'
})

// 定义添加页面的component
export class AddTipComponent implements OnInit {
  // @Input() notice:boolean;
  tips: Tip[] = [];
  addTip: Tip;
  notice: boolean;
  constructor(
    private tipService: TipService,
    private modalService: NgbModal,
  ) { }

  //  添加功能
  setTip(name: string, expirationTime: string, description: string) {
    this.notice = this.tipService.setTip(name, expirationTime, description);
    if (!this.notice) {
      this.addTip = new Tip;
    }
  }

  // 关闭按钮
  close() {
    this.notice = false;
    this.addTip = new Tip;
  }

  // 初始化时tip信息为空
  ngOnInit(): void {
    this.tipService.reNew().then(reNewTip => {
      this.addTip = new Tip;
    });;
  }
}