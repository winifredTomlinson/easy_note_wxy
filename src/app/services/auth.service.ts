import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { NoteAuth, NoteAjax, NoteStorage, NoteUtil } from './';

@Injectable()
export class AuthService {

  private isFirstRoute: boolean = true;

  constructor(
    private router: Router,
    private noteAuth: NoteAuth,
    private noteAjax: NoteAjax,
    private noteStorage: NoteStorage,
    private noteUtil: NoteUtil
  ) { }


  getSystemConfigData() {
    return this.noteAjax.get(`${NewkitConf.NewkitAPI}/menu/urls`)
      .then(res => {
        this.noteAuth.setAuthorizedUrls(res.json());
      });
  }

  login(ssoToken: string): Promise<void> {
    let postData = {
      SSOToken: ssoToken,
      ApplicationIds: NewkitConf.Applications.map(x => x.id)
    };
    return this.noteAjax.post(`${NewkitConf.NewkitAPI}/login`, postData)
      .then(res => {
        this._processLoginData(res);
        return Promise.resolve();
      }).catch(reason => true);
  }


  autoLogin(newkitToken: string): Promise<void> {
    return this.noteAjax.post(`${NewkitConf.NewkitAPI}/autologin`, null, { headers: { 'x-newkit-token': newkitToken } })
      .then(res => {
        this._processLoginData(res, true);
        return Promise.resolve();
      });

  }

  requireAuth(to: RouterStateSnapshot, from: ActivatedRouteSnapshot, router: Router, isChild: boolean): Promise<boolean> {
    if (this.noteAuth.isAuthenticated()) {
      return Promise.resolve(true);
    } else {
      this.noteStorage.local.set('newkit_redirect_url', window.location.pathname + window.location.search + window.location.hash);
      router.navigateByUrl('/login');
      return Promise.resolve(false);
    }
  }

  _processLoginData(res, isAutoLogin: boolean = false) {
    let token = res.headers.get('x-newkit-token');
    if (!isAutoLogin) {
      this.noteStorage.cookie.set('x-newkit-token', token, 1);
    }
    let data = res.json();
    let authData = {
      userInfo: data.UserInfo,
      roleAttributes: data.RoleAttributes,
      roles: data.Roles,
      functions: data.Functions,
      menus: data.MenuData,
      globalSearch: data.globalSearch,
      neweggPermission: data.NeweggPermission
    };
    this.noteStorage.local.set('x-newkit-authorize', authData);
    this.noteAuth.setAuthData(authData);
  }

}
