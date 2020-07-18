import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions ={
    scaleShowVerticalLines:false,
    responsive:true
  };

  public barChartLabels = ['January','February','March','January','February','March','March'];
  public barChartType='bar';
  public barChartLegend= true;
  public barChartData = [
      {data:[65,33,78,87,56,78,89]},
      {data:[23,67,78,78,32,45,80]},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
