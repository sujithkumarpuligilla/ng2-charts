import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {
  public pieChartOptions = {
    responsive: true,
  };
  public pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData = [300, 500, 100];
  public pieChartType = 'pie';
  public pieChartLegend = true;


  constructor() { }

  ngOnInit(): void {
  }

}
