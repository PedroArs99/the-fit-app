import { Component, computed, signal } from '@angular/core';
import { BodyMetric } from '../../models/body-metric.model';
import { bodyMetricsRepository } from '../../services/body-metrics-repository.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tfa-body-dashboard',
  templateUrl: './body-dashboard.component.html',
  styleUrl: './body-dashboard.component.scss',
})
export class BodyDashboardComponent {
  private metrics = this.bodyMetricsRepository.metrics;

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

  progressForm = new FormGroup({
    date: new FormControl<Date | undefined>(undefined, [Validators.required]),
    weight: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(0)]),
    muscleMass: new FormControl<number | undefined>(undefined, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    fatMass: new FormControl<number | undefined>(undefined, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
  });

  constructor(private bodyMetricsRepository: bodyMetricsRepository) {
    this.bodyMetricsRepository.getAll();
  }

  trackProgress(): void {
    const formValue = this.progressForm.value;

    const bodyMetric: BodyMetric = {
      timestamp: formValue.date!,
      weight: formValue.weight!,
      muscleMassPercentage: formValue.muscleMass!,
      fatMassPercentage: formValue.fatMass!,
      boneMassPercentage: +(100 - formValue.muscleMass! - formValue.fatMass!).toFixed(2),
    };

    this.bodyMetricsRepository.save(bodyMetric);
    this.progressForm.reset();
  }
}
