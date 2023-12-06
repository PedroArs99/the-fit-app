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
      muscleMassPercentage: 81,
      fatMassPercentage: 14.7,
      boneMassPercentage: 4.3,
    },
    {
      timestamp: new Date(2023, 11, 4),
      weight: 74.3,
      muscleMassPercentage: 81.5,
      fatMassPercentage: 14.2,
      boneMassPercentage: 4.2,
    },
  ]);

  weightTimeSeries = computed(() => this.metrics().map((it) => ({ timestamp: new Date(it.timestamp), value: it.weight })));
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
