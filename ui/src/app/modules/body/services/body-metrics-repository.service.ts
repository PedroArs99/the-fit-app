import { Injectable, signal } from '@angular/core';
import { Signalizable } from '../../../shared/models/signalizable.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BodyMetric } from '../models/body-metric.model';

@Injectable()
export class bodyMetricsRepository {
  constructor(private httpClient: HttpClient) {}

  getAll(): Signalizable<BodyMetric[]> {
    const isLoading = signal(true);
    const metrics = signal<Array<BodyMetric>>([]);

    this.httpClient.get<BodyMetric[]>(`${environment.apiUrl}/body/metrics`).subscribe((data) => {
      isLoading.set(false);

      const metricsResponse = data.map((entry) => this.mapResponseEntryToDomain(entry));
      metrics.set(metricsResponse);
    });

    return {
      isLoading,
      value: metrics,
    };
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
