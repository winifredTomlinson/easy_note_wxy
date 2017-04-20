import { Component, Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './';

@Injectable()
@Component({
  providers: [AuthService],
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, isChild = false): Promise<boolean> {
    // let moduleName = state.url.split('/')[1];
    // if(!isChild && moduleName){
    //   this.negModuleLoader.useModuleStyles(moduleName);
    // }
    return this.authService.requireAuth(state, route, this.router, isChild);
        
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state, true);
  }

  canDeactivate(): boolean {
    return true;
  }
  canLoad(): boolean {
    return true;
  }
}
