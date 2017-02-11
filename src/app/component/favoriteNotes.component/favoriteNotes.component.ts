import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
@Component({
  templateUrl: 'app/component/favoriteNotes.component/favoriteNotes.component.html',
})

export class FavoriteComponent implements OnInit{
  private leftNav: any;
  private state: string = 'open';
  private noteConf: any = {};
  private configurationInfo: any = {};
  constructor(

  ) { }

  ngOnInit(): void {
      
  }

}