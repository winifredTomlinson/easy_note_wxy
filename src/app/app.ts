import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <div class="list-title">
    <h2 [routerLink]="['/todo_list']">My List</h2>
  </div>
  <router-outlet></router-outlet>   
    `,
})
export class AppComponent {

}


