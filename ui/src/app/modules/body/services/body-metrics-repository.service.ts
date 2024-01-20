import { Injectable, signal } from '@angular/core';
import { Signalizable } from '../../../shared/models/signalizable.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BodyMetric } from '../models/body-metric.model';

@Injectable()
export class BodyMetricsRepository {
  private _isLoading = signal(true);
  private _metrics = signal<Array<BodyMetric>>([]);

  metrics: Signalizable<BodyMetric[]> = {
    isLoading: this._isLoading,
    value: this._metrics,
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Signalizable<BodyMetric[]> {
    this.httpClient.get<BodyMetric[]>(`${environment.apiUrl}/body/metrics`).subscribe((data) => {
      this._isLoading.set(false);

      const metricsResponse = data.map((entry) => this.mapResponseEntryToDomain(entry));
      this._metrics.set(metricsResponse);
    });

    return this.metrics;
  }

  save(metric: BodyMetric) {
    this._isLoading.set(true);

    this.httpClient.post<BodyMetric>(`${environment.apiUrl}/body/metrics`, metric).subscribe(() => {
      this._isLoading.set(false);
      this._metrics.update((current) => [...current, metric]);
    });
  }

  private mapResponseEntryToDomain(entry: BodyMetric) {
    return new BodyMetric(
      entry.timestamp,
      entry.weight,
      entry.muscleMassPercentage,
      entry.fatMassPercentage,
      entry.boneMassPercentage
    );
  }
}
