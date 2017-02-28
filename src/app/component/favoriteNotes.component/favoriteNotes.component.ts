import { Component, OnInit, Directive } from '@angular/core';
// import 'chart.js';
declare let d3: any;
// @Directive({
//   selector: '[nvD3]'
// })
@Component({
  selector: '',
  // directives: [nvD3],
  templateUrl: 'app/component/favoriteNotes.component/favoriteNotes.component.html',
})
export class FavoriteComponent implements OnInit {
  private options: any;
  private data: any;
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    // this.options = {
    //   chart: {
    //     type: 'lineChart',
    //     height: 450,
    //     margin: {
    //       top: 20,
    //       right: 20,
    //       bottom: 40,
    //       left: 55
    //     },
    //     x: function (d: any) { return d.x; },
    //     y: function (d: any) { return d.y; },
    //     useInteractiveGuideline: true,
    //     xAxis: {
    //       axisLabel: 'Time (ms)'
    //     },
    //     yAxis: {
    //       axisLabel: 'Voltage (v)',
    //       tickFormat: function (d: any) {
    //         return d3.format('.02f')(d);
    //       },
    //       axisLabelDistance: -10
    //     }
    //   }
    // };

    // this.data = this.sinAndCos();
  }


  // sinAndCos() {
  //   var sin: any = [], sin2: any = [],
  //     cos: any = [];

  //   //Data is represented as an array of {x,y} pairs.
  //   for (var i = 0; i < 100; i++) {
  //     sin.push({ x: i, y: Math.sin(i / 10) });
  //     sin2.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
  //     cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
  //   }

  //   //Line chart data should be sent as an array of series objects.
  //   return [
  //     {
  //       values: sin,      //values - represents the array of {x,y} data points
  //       key: 'Sine Wave', //key  - the name of the series.
  //       color: '#ff7f0e'  //color - optional: choose your own line color.
  //     },
  //     {
  //       values: cos,
  //       key: 'Cosine Wave',
  //       color: '#2ca02c'
  //     },
  //     {
  //       values: sin2,
  //       key: 'Another sine wave',
  //       color: '#7777ff',
  //       area: true      //area - set to true if you want this line to turn into a filled area chart.
  //     }
  //   ];
  // }

}

// export class FavoriteComponent implements OnInit{
//   private leftNav: any;
//   private state: string = 'open';
//   private noteConf: any = {};
//   private configurationInfo: any = {};
//   constructor(

//   ) { }

//   ngOnInit(): void {

//   }

// }