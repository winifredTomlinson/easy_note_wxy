//编辑页面component
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TIPS } from '../../common/mock_tips';
import { Tip } from '../../common/tip';
import { TipService } from '../../services/tip.service';
// import { Ng2UeditorModule } from 'ng2-ueditor';
declare var editormd: any;
@Component({
  // selector: 'ng2-ueditor',
  templateUrl: 'app/component/edit_markdown.component/edit_markdown.component.html',
})
export class EditMarkdownComponent{
  // @Input() id:number;
  tips: Tip[] = [];
  tip: any;
  newTip: Tip;

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

  private showEditor(){
  }

  ngOnInit(): void {
    let editor = editormd("editormd", {
        width:'100%',
        height:690,
        emoji : true,
        codeFold : true,
        path : "./config_js/lib/" // 根据自己的实际路径填写
    });
  }
//  ngOnDestroy() {
//     editormd("editormd", {
//         width:0,
//         height:0
//     });
//   }
}