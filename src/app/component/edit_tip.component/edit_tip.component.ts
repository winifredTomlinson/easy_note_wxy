//编辑页面component
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TIPS } from '../../common/mock_tips';
import { Tip } from '../../common/tip';
import { TipService } from '../../services/tip.service';
// import { Ng2UeditorModule } from 'ng2-ueditor';
declare var UE: any;
@Component({
  // selector: 'ng2-ueditor',
  templateUrl: 'app/component/edit_tip.component/edit_tip.component.html',
})
export class EditTipComponent {
  // @Input() id:number;
  tips: Tip[] = [];
  tip: any;
  newTip: Tip;
  // private fileTitle: string;

  // @Output()
  // private newFileId: EventEmitter<string> = new EventEmitter();

  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location,
    private localStorageService: LocalStorageService

  ) {

  }


  //编辑页面不保存功能
  noSave(id: number) {
    this.tip = this.localStorageService.get('basic_tip');
    console.log(this.tip);
    this.tipService.noSave(id, this.tip);
  }

  private showEditor() {
  }


  // private emitValue() {
  //   // this.onChange(this.pageIndex);
  //   this.fileId = '1';
  //   this.newFileId.next(this.fileId);
  // }

  ngOnInit(): void {
    //新建
    // this.fileTitle = '无标题笔记';
    // console.log(this.fileTitle);
    // if (!this.fileTitle) {
    //   this.fileTitle = '无标题笔记';
    //   console.log(this.fileTitle);
    // }

    let fileContent = '<p>aaaaaaaaaaaaaaa</p>'
    UE.getEditor('container');
    let ue = UE.getEditor('container');
    ue.ready(function () {
      ue.setContent(fileContent);
      console.log(ue.getContent());
    });

    // this.emitValue();
    // this.route.params
    //   .switchMap((params: Params) => this.tipService.getTip(+params['id']))
    //   .subscribe(tip => this.tip = tip);
  }
  ngOnchange(): void {

  }

  ngOnDestroy() {
    UE.getEditor('container').destroy();
  }
}