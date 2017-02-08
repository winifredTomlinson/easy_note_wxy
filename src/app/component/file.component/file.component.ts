import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-app',
  templateUrl: 'app/component/file.component/file.component.html',
})

export class FileComponent implements OnInit{
  private leftNav: any;
  private state: string = 'open';
  public toggleLeftMenu(){
    if(this.state=='open'){
      this.leftNav.style.display = 'none';
      return this.state='close';
    }
    if(this.state=='close'){
      this.leftNav.style.display = 'table-cell';
      return this.state='open';
    }
  }

  ngOnInit(): void {
    this.leftNav = document.getElementById('leftNav');
  }

}