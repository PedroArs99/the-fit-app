import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { TimeSerie } from '../../../models/time-serie';
import { faL } from '@fortawesome/free-solid-svg-icons';

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
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: 'rgba(150, 160, 168, 0.4)',
        },
      },
    },
  };

  ngOnInit(): void {
    const labels = this.timeSerie.map((entry) =>
      new Date(entry.timestamp).toLocaleDateString('es-ES', { day: 'numeric', month: '2-digit' })
    );
    const data = this.timeSerie.map((entry) => entry.value);

    this.lineChartData.set({
      labels,
      datasets: [
        {
          data,
          fill: true,
          tension: 0.5,
          borderColor: '#ef8c65',
          backgroundColor: 'rgba(239, 140, 101, 0.4)',
          pointBackgroundColor: '#ef8c65',
          // borderColor: '#ffdb1d',
          // backgroundColor: 'rgba(255, 219, 29, 0.4)',
          // pointBackgroundColor: '#ffdb1d',
          pointBorderColor: '#000000',
        },
      ],
    });
  }
}
