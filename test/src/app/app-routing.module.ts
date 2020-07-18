import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'bar-chart',component:MyBarChartComponent},
{path: 'pie-chart',component: MyPieChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
