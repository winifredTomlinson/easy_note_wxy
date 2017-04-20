import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NoteAjax } from '../../services/NoteAjax';
// import { NoteAuth } from '../../services/NoteAuth';
// import { AuthService } from '../../services/auth.service';
// import { AuthGuard } from '../../services/auth-guard';

@Component({
  providers: [NoteAjax],
  templateUrl: 'app/component/sign_in.component/sign_in.component.html',
})


export class SignInComponent{
  private mainBox:any;
  private signupWraper: any;
  private signinWraper: any;
  private currentOperate: string = '注册';
  private noteLetter: any;


  //登录
  private signInName: string;
  private signInPassword: string;
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

  private submitInfor(){
    let userInfor = {
        name: this.signInName,
        password: this.signInPassword
    };
    this.noteAjax.get("../config_js/json/sign_in.json")
        .then((data) => {
          let dataJson = JSON.parse (data._body);
          console.log(dataJson.name);
          if(this.signInName == dataJson.name && this.signInPassword == dataJson.password){
            this.router.navigateByUrl('');
          }
        });
    
  }

  constructor(
    private router: Router,
    private noteAjax: NoteAjax,
    // private authService: AuthService,
    // private authGuard: AuthGuard,
    // private noteAuth: NoteAuth
  ) { }


  ngOnInit(): void {
    this.mainBox = document.getElementById("mainBox");    
    this.signupWraper = document.getElementById("signupWraper");
    this.signinWraper = document.getElementById("signinWraper");
    this.noteLetter = document.getElementById("noteLetter");
    // this.noteLetter.style.height = "420px";
  }
  ngOnChanegs(obj: any): void{
    this.signInName = obj.signInName;
    this.signInPassword = obj.signInPassword;
  }

}