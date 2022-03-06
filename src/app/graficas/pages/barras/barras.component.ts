import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
  responsive: true
  };
  //El barCharType es para elegir que tipo de grafica utilizaremos
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ],  label: 'Grupo A',backgroundColor:'#909EF0', hoverBackgroundColor: '#AD71F0' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ],  label: 'Grupo B',backgroundColor:'#DFF000', hoverBackgroundColor: '#E5F05B' },
      { data: [ 50, 20, 10, 90, 79, 100, 60 ], label: 'Grupo c',backgroundColor:'#7418F0', hoverBackgroundColor: '#646EF0' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  

  public randomize(): void {    
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) 
    ] ;
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) 
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) 
    ];
    

    this.chart?.update();
  }





  constructor() { }

  ngOnInit(): void {
  }

}
