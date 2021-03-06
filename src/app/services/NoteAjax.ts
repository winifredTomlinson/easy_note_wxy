import { Component, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
@Component({
  providers: [Http]
  // templateUrl: 'app/component/sign_in.component/sign_in.component.html',
})
export class NoteAjax {

  constructor(private http: Http) {

  }

  public get(url: string, options?: any): Promise<any> {
    return this._request('GET', url, null, options);
  }

  public post(url: string, body: any, options?: any): Promise<any> {
    return this._request('POST', url, body, options);
  }

  public put(url: string, body: any, options?: any): Promise<any> {
    return this._request('PUT', url, body, options);
  }

  public delete(url: string, options?: any): Promise<any> {
    return this._request('DELETE', url, null, options);
  }

  _handlerError(error: any) {
    console.error(error, 'global catch');
  }

  _buildOptions(options:any, type:any) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    if (type !== 'GET' && type !== 'DELETE') {
      headers.append('Content-Type', 'application/json');
    }
    if (options && options.headers && typeof options.headers === 'object') {
      Object.keys(options.headers).forEach(k => {
        headers.set(k, options.headers[k]);
      });
    }
    let reqOptions = new RequestOptions({
      headers: headers
    });
    console.log(reqOptions.headers);
    return reqOptions;
  }

  _request(type:any, url:any, body:any, options:any) {
    let p:any;
    switch (type) {
      case 'GET':
        p = this.http.get(url, this._buildOptions(options, 'GET'));
        break;
      case 'POST':
        p = this.http.post(url, body, this._buildOptions(options, 'POST'));
        break;
      case 'PUT':
        p = this.http.put(url, body, this._buildOptions(options, 'PUT'));
        break;
      case 'DELETE':
        p = this.http.delete(url, this._buildOptions(options, 'DELETE'));
        break;
      default:
        throw new Error('Not Supported Method');
    }
    return p.toPromise()
      .then((data: any) => {
        // if (true) {
        //   // this.requestCount -= 1;
        //   // this._processLoading();
          return data;
        // }

        // return {
        //   //  data: this._tryGetJsonData(res), res
        //   };
      }).catch(
        () => {
          console.log('kkkkkkkkkkkkkkkkkkkkkkkk');    
        }
        // errRes => {
        //   if (!options.hideLoading) {
        //     this.requestCount -= 1;
        //     this._processLoading();
        //   }
        //   if (!options.useCustomErrorHander) {
        //     this._handlerError(errRes);
        //   }
        //   return Promise.reject(errRes);
        // }
      );
  }

      _tryGetJsonData(res: any) {
      try {
        return res.json();
      } catch (ex) {
        return res.text();
      }
    }

};
