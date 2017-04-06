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
declare var UE: any;
@Component({
  // selector: 'ng2-ueditor',
  templateUrl: 'app/component/edit_tip.component/edit_tip.component.html',
})
export class EditTipComponent{
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
    UE.getEditor('container');
      let ue = UE.getEditor('container');
        ue.ready( function() {
          ue.setContent('<p>new text</p>');
          console.log(ue.getContent());
         } );
      // console.log(ue.getContent());
    //  let content = UE.getEditor('container').getContent()
    //       console.log( UE.getEditor('container').getContent());
    // this.ue.editor.setContent('<p>new text</p>', true);
    
  }

 ngOnDestroy() {
    UE.getEditor('container').destroy();
  }
}