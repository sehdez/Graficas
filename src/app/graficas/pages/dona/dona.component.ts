import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Python','JS','GO','C++', 'TypeScript','Java','C#' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 20.6, 18.6, 13.5, 11.8, 11.7, 11, 10 ], 
        backgroundColor:['#3B468F','#DB4B16','#67DB16','#001DDB','#16DB57','#6E00DB','#3F8F07'],
        hoverBackgroundColor: ['#5B66AF','#FB6B36','#87FB36','#203DFB','#16FB77','#8E20FB','#5FAF27']
      }

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit(): void {
  }

}
