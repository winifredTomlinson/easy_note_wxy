//编辑页面component
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TIPS } from '../../common/mock_tips';
import { Tip } from '../../common/tip';
import { NoteAjax } from '../../services/NoteAjax';
import { TipService } from '../../services/tip.service';
// import { Ng2UeditorModule } from 'ng2-ueditor';
declare var UE: any;
@Component({
  providers: [NoteAjax],
  // selector: 'ng2-ueditor',
  templateUrl: 'app/component/edit_tip.component/edit_tip.component.html',
})
export class EditTipComponent {
  // @Input() id:number;
  tips: Tip[] = [];
  idAbstract:any;
  currentId: any;
  tip: any;
  newTip: Tip;
  // private fileTitle: string;

  // @Output()
  // private newFileId: EventEmitter<string> = new EventEmitter();

  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location,
    private localStorageService: LocalStorageService,
    private noteAjax: NoteAjax

  ) {

  }


  //编辑页面不保存功能
  noSave(id: number) {
    this.tip = this.localStorageService.get('basic_tip');
    console.log(this.tip);
    this.tipService.noSave(id, this.tip);
  }

  private saveFileInfor(){
    let ue = UE.getEditor('container');
    this.route.params
      .subscribe(params => this.currentId = params['id'])
      // .subscribe(tip => this.tip = tip);
      console.log(this.currentId);
    let currentfileInfor = {                          //传给后台的对象包括：文件id, 编辑框内容和文件type
      currentId : this.currentId,
      currentContent: ue.getContent(),
      fileType: 'edite'
    }
    if(!$('#edui6_state').hasClass('edui-state-disabled')){
       this.noteAjax.post(`${NewkitConf.APIGatewayAddress}/api/login/`, ue.getContent())
          .then((data) => {
            // let dataJson = JSON.parse (data._body);
            // console.log(dataJson.name);
            // if(this.signInName == dataJson.name && this.signInPassword == dataJson.password){
            //   this.router.navigateByUrl('');
            // }
      });
    }
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