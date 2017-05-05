// 添加tip

import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '../../common/modal_backdrop';
import { MaterialModule } from '@angular/material';
import { Tip } from '../../common/tip';
import { NoteAjax } from '../../services/NoteAjax';
import { TipService } from '../../services/tip.service';
import { TodolistComponent } from '../todo_list.component/todo_list.component';
@Component({
  selector: 'nk-profile',
  providers: [NoteAjax],
  templateUrl: 'app/component/modal.component/user_profile.component.html'
})

// 定义添加页面的component
export class UserProfileComponent implements OnInit {
  // @Input() notice:boolean;
  tips: Tip[] = [];
  addTip: Tip;
  notice: boolean;
  private userPhotoUrl: string = '';
  private nickname: string;
  private nicknameValid:boolean = true;
  constructor(
    private tipService: TipService,
    private modalService: NgbModal,
    private noteAjax: NoteAjax,
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
  private photoSelect(e:any){
    let files = e.target.files || e.srcElement.files;
    let file = files[0];
    let formData = new FormData;
    formData.append('upfile', file);
    formData.append('key1', 'value1');
    formData.append('key2', 'value2');
    this.noteAjax.post(`${NewkitConf.APIGatewayAddress}/api/upload/`, formData)
          .then((data) => {

      });
  }

  private saveProfile(){
    if(!this.nickname){
      $('#saveProfile').attr('data-dismiss', '');
      this.nicknameValid = false;
    }else{
      $('#saveProfile').attr('data-dismiss', 'modal');
      this.nicknameValid = true;
    }
  }

  // 初始化时tip信息为空
  ngOnInit(): void {
    // $('#photoSelect').onchange = function(e:any){
    //   console.log(e);
    // }
    this.tipService.reNew().then(reNewTip => {
      this.addTip = new Tip;
    });
  }
  ngOnchanges(changesObj: any): void{
    this.nickname = changesObj.nickname;
  }
}