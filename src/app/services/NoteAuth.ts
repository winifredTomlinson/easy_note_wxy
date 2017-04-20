import { Component, Injectable } from '@angular/core';

import { NoteStorage } from './NoteStorage';

@Component({
  providers: [NoteStorage]
  // templateUrl: 'app/component/sign_in.component/sign_in.component.html',
})
export class NoteAuth {

  private authData: any;

  private authorizedUrls: any = {};

  private userConfig: any = {};

  private _isAuthenticated: boolean = false;
  constructor(private negStorage: NoteStorage) { }

  setAuthData(authData:any) {
    this.authData = authData;
    this.authData.newkitToken = this.negStorage.local.get('x-newkit-token');
    this._isAuthenticated = true;
  }

  setAuthorizedUrls(value:any) {
    this.authorizedUrls = value;
  }

  setUserConfig(value:any) {
    this.userConfig = value;
  }

  getAuthData() {
    return this.authData;
  }

  getUserInfo() {
    return this.authData ? this.authData.userInfo : null;
  }

  isAuthenticated() {
    return true;
  }
}