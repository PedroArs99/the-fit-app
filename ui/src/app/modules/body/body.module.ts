import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDashboardComponent } from './pages/body-dashboard/body-dashboard.component';
import { BodyTimeseriesComponent } from './components/body-timeseries/body-timeseries.component';
import { LineChartComponent } from '../../shared/components/charts/line-chart/line-chart.component';
import { BodyMetricsRepository } from './services/body-metrics-repository.service';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BodyDashboardComponent,
  },
];

@NgModule({
  declarations: [BodyDashboardComponent, BodyTimeseriesComponent],
  imports: [CommonModule, LineChartComponent, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [BodyMetricsRepository],
})
export class BodyModule {}
