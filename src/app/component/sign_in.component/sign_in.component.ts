import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-app',
  templateUrl: 'app/component/sign_in.component/sign_in.component.html',
})


export class SignInComponent implements OnInit{
  private mainBox:any;
  private signupWraper: any;
  private signinWraper: any;
  private currentOperate: string = '注册';
  private noteLetter: any;
  private signin(){
    this.mainBox.style.height = '100px';
    this.signupWraper.style.left = '-300px';
    this.signinWraper.style.left = '0';
    this.currentOperate = '登录';
  }
  private signup(){
    this.mainBox.style.height = '200px';
    this.signupWraper.style.left = '0';
    this.signinWraper.style.left = '300px';
    this.currentOperate = '注册';
  }

  ngOnInit(): void {
    this.mainBox = document.getElementById("mainBox");    
    this.signupWraper = document.getElementById("signupWraper");
    this.signinWraper = document.getElementById("signinWraper");
    this.noteLetter = document.getElementById("noteLetter");
    // this.noteLetter.style.height = "420px";
  }

}