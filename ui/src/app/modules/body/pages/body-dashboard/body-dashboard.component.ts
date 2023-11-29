import { Component, computed, signal } from '@angular/core';
import { BodyMetric } from '../../models/body-metric.model';

@Component({
  selector: 'tfa-body-dashboard',
  templateUrl: './body-dashboard.component.html',
  styleUrl: './body-dashboard.component.scss',
})
export class BodyDashboardComponent {
  private metrics = signal<Array<BodyMetric>>([
    {
      timestamp: new Date(2023, 10, 28),
      weight: 74.1,
      muscleMassPercentage: 0.81,
      fatMassPercentage: 0.147,
      boneMassPercentage: 0.043,
    },
  ]);

  weightTimeSeries = computed(() => this.metrics().map((it) => ({ timestamp: it.timestamp, value: it.weight })));
  muscleMassTimeSeries = computed(() =>
    this.metrics().map((it) => ({ timestamp: it.timestamp, value: it.muscleMassPercentage }))
  );
  fatMassTimeSeries = computed(() =>
    this.metrics().map((it) => ({ timestamp: it.timestamp, value: it.fatMassPercentage }))
  );
  boneMassTimeSeries = computed(() =>
    this.metrics().map((it) => ({ timestamp: it.timestamp, value: it.boneMassPercentage }))
  );
}
