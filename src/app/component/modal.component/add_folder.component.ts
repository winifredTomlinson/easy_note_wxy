//新建文件夹

import { Component, Input, OnInit,forwardRef, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '../../common/modal_backdrop';
import { MaterialModule } from '@angular/material';
import { Tip } from '../../common/tip';
import { TipService } from '../../services/tip.service';
import { TodolistComponent } from '../todo_list.component/todo_list.component';
@Component({
  selector: 'nk-add-folder',
  templateUrl: 'app/component/modal.component/add_folder.component.html'
})

// 定义添加页面的component
export class AddFolderComponent implements OnInit {
  // @Input() notice:boolean;
  tips: Tip[] = [];
  addTip: Tip;
  notice: boolean;
  
  private checkPassword: any;
  private checked: boolean = false;
  private folderNameInput: any;
//   private passwordInput: any;
//   private confirmPasswordInput: any;
  private hasFileName: boolean = true;
  private passwordValid: boolean = true;
  private hasSamePassword: boolean = true;
  private value: any;
  private confirmValue:any;
  constructor(
    private tipService: TipService,
    private modalService: NgbModal,
    private elementRef: ElementRef
  ) {
    //   super();
   }

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

  private saveFolderInfo(){
      if(!this.folderNameInput.value){
          this.hasFileName = false;
      }
  }

  private hasSetPassword(){
      console.log(this.value);
       if(!this.value){
          this.passwordValid = false;
      }else{
          this.passwordValid = true;
      }
    //   this.passwordValid = !this.passwordValue : false ? true;
  }

    private confirmPasswordValid(){
      console.log(this.confirmValue);
        
       if(!this.confirmValue === this.value){
          this.hasSamePassword = false;
      }else{
          this.hasSamePassword = true;
      }
  }

  // 初始化时tip信息为空
  ngOnInit(): void {
    this.folderNameInput = document.getElementById('folderNameInput');
    this.elementRef.nativeElement.className = 'addFolder';
    // this.tipService.reNew().then(reNewTip => {
    //   this.addTip = new Tip;
    // });
  }

   ngOnChanges(changesObj: any) {
        this.checked = true;
        this.value = changesObj.value;
        this.confirmValue = changesObj.confirmValue;
  }
}