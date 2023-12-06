import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { TimeSerie } from '../../../models/time-serie';

@Component({
  selector: 'tfa-line-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  @Input({ required: true }) timeSerie!: TimeSerie;

  lineChartData = signal<ChartConfiguration<'line'>['data'] | undefined>(undefined);

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  ngOnInit(): void {
    const labels = this.timeSerie.map((entry) => new Date(entry.timestamp).toDateString());
    const data = this.timeSerie.map((entry) => entry.value);

    this.lineChartData.set({
      labels,
      datasets: [
        {
          data,
          fill: true,
          tension: 0.5,
          borderColor: '#ffdb1d',
          backgroundColor: '#ffdb1d',
          pointBackgroundColor: '#000000',
          pointBorderColor: '#000000',
        },
      ],
    });
  }
}
