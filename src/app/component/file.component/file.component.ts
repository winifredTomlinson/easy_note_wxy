import { Component, OnInit } from '@angular/core';
// import { NoteAjax } from '../../services/NoteAjax';
// import { NoteAuth } from '../../services/NoteAuth';

@Component({
  templateUrl: 'app/component/file.component/file.component.html',
})

export class FileComponent implements OnInit{
  private leftNav: any;
  private contentRight: any;
  private state: string = 'open';
  private noteConf: any = {};
  private configurationInfo: any = {};
  private PageSrc:any;
  constructor(
    // private noteAjax: NoteAjax,
    // private noteAuth: NoteAuth
  ) { }
  public toggleLeftMenu(){
    if(this.state=='open'){
      this.leftNav.style.display = 'none';
      // this.contentRight.style.left = '0';
      // this.contentRight.style.width = '100%';
      return this.state='close';
    }
    if(this.state=='close'){
      this.leftNav.style.display = 'table-cell';
      // this.contentRight.style.left = this.contentRight.style.width;
      return this.state='open';
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

  ngOnInit(): void {
    this.leftNav = document.getElementById('leftNav');
    this.contentRight = document.getElementById('contentRight');
  }

}