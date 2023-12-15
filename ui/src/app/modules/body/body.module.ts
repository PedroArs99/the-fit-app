import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDashboardComponent } from './pages/body-dashboard/body-dashboard.component';
import { BodyTimeseriesComponent } from './components/body-timeseries/body-timeseries.component';
import { LineChartComponent } from '../../shared/components/charts/line-chart/line-chart.component';
import { bodyMetricsRepository } from './services/body-metrics-repository.service';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    BodyDashboardComponent,
    BodyTimeseriesComponent
  ],
  imports: [
    CommonModule,
    LineChartComponent,
    SharedModule,
  ],
  providers: [
    bodyMetricsRepository
  ]
})
export class BodyModule { }
