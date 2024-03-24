import { Injectable, signal } from '@angular/core';
import { Signalizable } from '@shared/models/signalizable.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { TrainingPlan } from '../models/training-plan.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class TrainingPlansRepository {
  constructor(private httpClient: HttpClient) {}

  getAll(): Signalizable<TrainingPlan[]> {
    const isLoading = signal(true);
    const trainingPlans = signal<Array<TrainingPlan>>([]);

    this.httpClient.get<TrainingPlan[]>(`${environment.apiUrl}/training-plans`).subscribe((data) => {
      isLoading.set(false);

      const response = data.map((entry) => this.mapResponseEntryToDomain(entry));
      trainingPlans.set(response);
    });

    return {
      isLoading,
      value: trainingPlans,
    };
  }

  getById(id: string): Observable<TrainingPlan> {
    return this.httpClient
      .get<TrainingPlan>(`${environment.apiUrl}/training-plans/${id}`)
      .pipe(map((response) => this.mapResponseEntryToDomain(response)));
  }

  private mapResponseEntryToDomain(entry: TrainingPlan) {
    return new TrainingPlan(entry.id, entry.name, entry.excercises);
  }
}
