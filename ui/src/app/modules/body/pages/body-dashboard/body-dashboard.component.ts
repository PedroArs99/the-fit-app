import { Component, computed, signal } from '@angular/core';
import { BodyMetric } from '../../models/body-metric.model';
import { bodyMetricsRepository } from '../../services/body-metrics-repository.service';

@Component({
  selector: 'tfa-body-dashboard',
  templateUrl: './body-dashboard.component.html',
  styleUrl: './body-dashboard.component.scss',
})
export class BodyDashboardComponent {
  private metrics = this.bodyMetricsRepository.getAll();

  isLoading = this.metrics.isLoading;

  weightTimeSeries = computed(() =>
    this.metrics.value().map((it) => ({ timestamp: new Date(it.timestamp), value: it.weight }))
  );

  muscleMassTimeSeries = computed(() =>
    this.metrics.value().map((it) => ({ timestamp: it.timestamp, value: it.muscleMassPercentage }))
  );

  fatMassTimeSeries = computed(() =>
    this.metrics.value().map((it) => ({ timestamp: it.timestamp, value: it.fatMassPercentage }))
  );

  boneMassTimeSeries = computed(() =>
    this.metrics.value().map((it) => ({ timestamp: it.timestamp, value: it.boneMassPercentage }))
  );

  constructor(private bodyMetricsRepository: bodyMetricsRepository) {}
}
