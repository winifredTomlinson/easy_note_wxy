import { Injectable } from '@angular/core';

@Injectable()
export class NegUtil {

  private window: any;

  constructor() {
    this.window = window;
  }

  encodeUri(text: string): string {
    return this.window.encodeURI(text);
  }

  decodeUri(text: string): string {
    return this.window.decodeURI(text);
  }

  escape(text: string): string {
    return this.window.escape(text);
  }

  unescape(text: string): string {
    return this.window.unescape(text);
  }

  getQuery(key?: string): any {
    let search = window.location.search.substring(1);
    const searchObj = {};
    search.split('&').forEach(s => {
      let sArr = s.split('=');
      searchObj[sArr[0]] = sArr[1];
    });
    if (key) {
      return searchObj[key];
    }
    return searchObj;
  }

  getBaseUrl(location:any) {
    return `${location.protocol}//${location.host}`;
  };

  addWatcher(obj: {}, property: string, watherFn: Function, defaultVal:any) {
    let privateProperty = `__${property}`;
    obj[privateProperty] = defaultVal;
    Object.defineProperty(obj, property, {
      get() {
        return this[privateProperty];
      },
      set(val) {
        let oldVal = this[property];
        this[privateProperty] = val;
        watherFn(val, oldVal);
      }
    });
  }
}
