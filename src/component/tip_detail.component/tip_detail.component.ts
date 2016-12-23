//tip详情 component

import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


import { Tip } from '../../js/tip';
import { TipService } from '../../js/tip.service';
@Component({
    selector: 'my-app',
    templateUrl: 'component/tip_detail.component/tip_detail.component.html',
})

export class TipDetailComponent implements OnInit {
  @Input()
  tip: Tip;
  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

//根据url参数获取tip
   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tipService.getTip(+params['id']))
      .subscribe(tip => this.tip = tip);
  }
}