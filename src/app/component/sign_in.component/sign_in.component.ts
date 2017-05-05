import { Component, OnInit, OnChanges, ElementRef } from '@angular/core';
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
  private $el: any;
  private mainBox:any;
  private signupWraper: any;
  private signinWraper: any;
  private currentOperate: string = '注册';
  private noteLetter: any;


  //注册
  private signupInfor: Array<any> = [
    {title: "用戶名", noticeInfor: "用戶名不能为空", value: "username"},
    {title: "密码", noticeInfor: "密码不能为空", value: "password"},
    {title: "确认密码", noticeInfor: "两次密码不一致", value: "confirmPassword"},
    {title: "用戶名", noticeInfor: "用戶名不能为空", value: "username"}
  ];
  private username: string;
  private password: string;
  private confirmPassword: string;
  private emailValue: string;
  private usernameValid: boolean = true;
  private passwordValid: boolean = true;
  private secondPasswordValid: boolean = true;
  private emailValid: boolean = true;


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

  private checkUsername(){
    if(!this.username){
      this.usernameValid = false;
    }else{
      this.usernameValid = true;
    }
  }

  private checkPassword(){
    if(!this.password){
      this.passwordValid = false;
    }else{
      this.passwordValid = true;
    }
  }

  private checkSecondPassword(){
    if(this.password == this.confirmPassword){
      this.secondPasswordValid = true;
    }else{
      this.secondPasswordValid = false;
    }
  }

  private submitInfor(){
    let userInfor = {
        username: this.signInName,
        password: this.signInPassword
    };
    if(this.currentOperate=='登录'){
      this.noteAjax.post(`${NewkitConf.APIGatewayAddress}/api/login/`, userInfor)
          .then((data) => {
            let dataJson = JSON.parse (data._body);
            if(dataJson.code == 10000){
              this.router.navigateByUrl('');
            }
      });
    }
    // if(this.currentOperate=='登录'){
    //   this.noteAjax.get("../config_js/json/sign_in.json")
    //       .then((data) => {
    //         let dataJson = JSON.parse (data._body);
    //         console.log(dataJson.name);
    //         if(this.signInName == dataJson.name && this.signInPassword == dataJson.password){
    //           this.router.navigateByUrl('');
    //         }
    //   });
    // }  
  }

  constructor(
    private router: Router,
    private noteAjax: NoteAjax,
    private elementRef: ElementRef
    // private authService: AuthService,
    // private authGuard: AuthGuard,
    // private noteAuth: NoteAuth
  ) { }


  ngOnInit(): void {
    this.$el = $(this.elementRef.nativeElement.className = 'signup-input');
    // this.$el.on('blur', (index:any) => console.log('gggggggggggggggg'));
    console.log(this.$el);
    this.mainBox = document.getElementById("mainBox");    
    this.signupWraper = document.getElementById("signupWraper");
    this.signinWraper = document.getElementById("signinWraper");
    this.noteLetter = document.getElementById("noteLetter");
    // this.noteLetter.style.height = "420px";
  }
  ngOnChanegs(obj: any): void{
    this.username = obj.username;
    this.password = obj.password;
    this.confirmPassword = obj.confirmPassword;
    this.signInName = obj.signInName;
    this.signInPassword = obj.signInPassword;
    this.emailValue = obj.emailValue;
    console.log(this.username);
  }

}