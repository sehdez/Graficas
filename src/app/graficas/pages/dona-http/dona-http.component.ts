import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';
import { Redes } from '../../interfaces/redes.interface';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  cargando=false;
  data!:number[]


   // Doughnut
   public doughnutChartLabels: string[] = [  ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data:[]}
 
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';
 

  constructor( public service: GraficasService) {
    
    
  }
  
  ngOnInit(): void {
    this.cargando = true;
    this.service.infoRedes()
      .subscribe (redes =>{
        const labels = Object.keys(redes);
        const values = Object.values(redes);
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets= [
          {
            data:values,
            backgroundColor:['#3B468F','#DB4B16','#67DB16','#001DDB','#16DB57','#6E00DB','#3F8F07'],
            hoverBackgroundColor: ['#5B66AF','#FB6B36','#87FB36','#203DFB','#16FB77','#8E20FB','#5FAF27']
          }
        ]
        this.data = values;
        this.cargando= false;
      })
  }

}
