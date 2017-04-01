import { Component, OnInit } from '@angular/core';
// import { NoteAjax } from '../../services/NoteAjax';
// import { NoteAuth } from '../../services/NoteAuth';

@Component({
  templateUrl: 'app/component/file.component/file.component.html',
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

  //tree view
  private treeOpen: boolean = false;
  private active: boolean = false;
  constructor(
    // private noteAjax: NoteAjax,
    // private noteAuth: NoteAuth
  ) { }
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

  ngOnInit(): void {
    this.noteList = [{
      name: '前端笔记',
      abstract: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      createTime: '2017-03-30'
    },{
      name: '前端笔记',
      abstract: 'bbbbbbbbbbbbbb',
      createTime: '2017-03-30'
    },{
      name: '前端笔记',
      abstract: 'ccccccccc',
      createTime: '2017-03-30'
    },{
      name: '前端笔记',
      abstract: 'ddddddddddddd',
      createTime: '2017-03-30'
    },{
      name: '前端笔记',
      abstract: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      createTime: '2017-03-30'
    },{
      name: '前端笔记',
      abstract: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      createTime: '2017-03-30'
    },{
      name: '前端笔记',
      abstract: 'bbbbbbbbbbbbbb',
      createTime: '2017-03-30'
    },];



    this.leftNav = document.getElementById('viewPort');
    this.contentRight = document.getElementById('contentRight');
    this.menuButton = document.getElementById('menuButton');
    $(".content-menu").on('click', function(){
      $(this).find('.menu-detail').addClass('menu-active');
      $(this).siblings().find('.menu-detail').removeClass('menu-active');
      // console.log($(".menu-active").siblings());
    });
    $(".icon-user").on('click', function(){
      $(this).attr('data-toggle', 'modal');
    });
  }
}