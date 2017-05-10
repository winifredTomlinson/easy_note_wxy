import { Component, OnInit } from '@angular/core';
// import { NoteAjax } from '../../services/NoteAjax';
// import { NoteAuth } from '../../services/NoteAuth';

@Component({
  templateUrl: 'app/component/file.component/file.component.html',
  // styleUrls:['css/black-skin.css']
})

export class FileComponent implements OnInit{
  private leftNav: any;
  private contentRight: any;
  private menuButton:any;
  private state: string = 'open';
  private noteConf: any = {};
  private configurationInfo: any = {};
  private PageSrc:any;
  private noteList: Array<any> = [];
  private newFolder:boolean = false;
  private skinColor:string = 'black';

  //tree view
  private treeData = [
    {
      text: '来自手机', value: 1, icon: 'fa fa-user', children: [
        { text: '工作', value: 11, icon: 'fa fa-lock' },
        { text: '娱乐', value: 12 },
        {
          text: '技术', value: 13, children: [
            { text: '后端', value: 131 },
            { text: '前端', value: 132, children: [
               { text: 'Angular 2', value: 1321 },
            ] },
          ]
        }
      ]
    },
    { text: '学习资料', value: 2 },
    { text: '影评', value: 3 }
  ];
  private treeOpen: boolean = false;
  private active: boolean = false;
  




  //新建fileId
  private newId: string;
  private fileTitle: string;

  private focusedIndex: number;
  private fileTitleHide: boolean = false;

  private transhDropdown:boolean = false;



  private showType: string = 'abstract';
  constructor(
    // private noteAjax: NoteAjax,
    // private noteAuth: NoteAuth
  ) { }

  private changeSkin(color: string){
    this.skinColor = color;
  }

  public toggleLeftMenu(){
    if(this.state=='open'){
      this.leftNav.style.paddingLeft = '0';
      this.menuButton.className += ' is-active';
      // this.contentRight.style.left = '0';
      // this.contentRight.style.width = '100%';
      return this.state='close';
    }
    if(this.state=='close'){
      this.leftNav.style.paddingLeft = '240px';
      // this.contentRight.style.left = this.contentRight.style.width;
       this.state='open';
      this.menuButton.className = 'menu-button';
    console.log(this.menuButton.className);
      
    }
  }
  
  private addNewfolder(name: any){
    let folderObj = {
      text: name,
      value: 3
    }
    this.treeData.push(folderObj);
  }

   public createNote() {
      this.noteConf = {
        index: 0,
        Domain: this.configurationInfo.domain,
        Key: this.configurationInfo.key,
        Value: this.configurationInfo.value,
        Description: this.configurationInfo.description,
        // InUser: this.noteAuth.getUserInfo().UserID
      }
    // this.noteAjax.post(`127.0.0.1:3000`, this.noteConf)
    //     .then(res => {
         
    //     });
  }

   private stopPrapation($event:any){
    $event && $event.stopPropagation();
  }

  private setTreeOpen(){
      this.treeOpen = !this.treeOpen;
      return this.treeOpen;
  }

  private menuActive(){
    // this.active = true;
    // console.log( $(this));
    // $('.menu-active').siblings().removeClass('menu-active');
  }

  private selectShowType(type: any){
    this.showType = type;
  }

  private selectCal(){
    this.fileTitleHide = true;
  }

  private addFolder(){
    this.newFolder = true;
    this.treeOpen = true;
    return this.newFolder, this.treeOpen;
  }

  private itemSelect(index: number){
    this.fileTitleHide = false;
    this.focusedIndex = index;
    
  } 


  private onNewFileId(){
    this.fileTitleHide = false;
    this.newId = '1';
    this.fileTitle = '无标题笔记';
    console.log(this.newId);
  }
  ngOnInit(): void {
    this.noteList = [{
      id: 'dsafrwgregrwtg',
      type: '/edite',
      title: '前端笔记',
      abstract: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      createTime: '2017-03-30'
    },{
      id: 'h89dghoty0pj0',
      type: '/markdown',      
      title: '前端笔记',
      abstract: 'bbbbbbbbbbbbbb',
      createTime: '2017-03-30'
    },{
      id: 'kkojfdbigkj080sdh',
      type: '/edite',      
      title: '前端笔记',
      abstract: 'ccccccccc',
      createTime: '2017-03-30'
    },{
      id: 'nxcfkrmve0w-r0',
      type: '/edite',      
      title: '前端笔记',
      abstract: 'ddddddddddddd',
      createTime: '2017-03-30'
    },{
      id: '29454185dsadfg',
      type: '/edite',      
      title: '前端笔记',
      abstract: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      createTime: '2017-03-30'
    },{
      id: 'fsdfe4trg6589o6789',
      type: '/markdown',      
      title: '前端笔记',
      abstract: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      createTime: '2017-03-30'
    },{
      id: 'gngrf6567rfb',
      type: '/markdown',      
      title: '前端笔记',
      abstract: 'bbbbbbbbbbbbbb',
      createTime: '2017-03-30'
    },];



    this.leftNav = document.getElementById('viewPort');
    this.contentRight = document.getElementById('contentRight');
    this.menuButton = document.getElementById('menuButton');
    $(".content-menu").on('click', function(){
      $(this).find('.menu-detail').addClass('menu-active');
      $(this).siblings().find('.menu-detail').removeClass('menu-active');
    });
    $(document).on('mousedown', function(event:any){
      if( !$(event.target).is('#trashBox') ){
      // event.preventDefault();
      // event.stopPropagation();
        $('#trashBoxMenu').css('display', 'none');
      }   
    });
    $(".icon-user").on('click', function(){
      $(this).attr('data-toggle', 'modal');
    });
      $("#trashBox").bind('contextmenu', function(){
       return false;
    });
     $('#trashBox').on('mousedown',function(event:any){
      if(event.button == 2) {
        event.preventDefault();
        $('#trashBoxMenu').css({'display': 'block', 'left': event.pageX + 'px', 'top': event.pageY - 110 +"px"});
      }else{
        $('#trashBoxMenu').css('display', 'none');
      }
    });
  }
}