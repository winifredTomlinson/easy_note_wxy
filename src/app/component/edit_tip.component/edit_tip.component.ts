//编辑页面component
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TIPS } from '../../common/mock_tips';
import { Tip } from '../../common/tip';
import { TipService } from '../../services/tip.service';
// import { Ng2UeditorModule } from 'ng2-ueditor';
declare var UE: any;
@Component({
  selector: 'ng2-ueditor',
  templateUrl: 'app/component/edit_tip.component/edit_tip.component.html',
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
  noSave(id: number) {
    this.tip = this.localStorageService.get('basic_tip');
    console.log(this.tip);
    this.tipService.noSave(id, this.tip);
  }

  //通过路由id获取tip
  ngOnInit(): void {
    // let UE:any;
    // var ue = UE.getEditor('container');


    // this.route.params
    //   .switchMap((params: Params) => this.tipService.getTip(+params['id']))
    //   .subscribe(tip => {
    //     this.tip = tip;
    //     this.localStorageService.set('basic_tip', tip);
    //     this.newTip = this.tip;
    //     this.tip = tip;
    //   });
  }
}