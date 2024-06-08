import { Injectable, signal } from '@angular/core';
import { Signalizable } from '@shared/models/signalizable.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise.model';

@Injectable()
export class ExercisesRepository {
  constructor(private httpClient: HttpClient) {}

  getAll(): Signalizable<Exercise[]> {
    const isLoading = signal(true);
    const excercises = signal<Array<Exercise>>([]);

    this.httpClient.get<Exercise[]>(`${environment.apiUrl}/exercises`).subscribe((data) => {
      isLoading.set(false);

      const excercisesResponse = data.map((entry) => this.mapResponseEntryToDomain(entry));
      excercises.set(excercisesResponse);
    });

    return {
      isLoading,
      value: excercises,
    };
  }

  getById(id: number): Signalizable<Exercise | undefined> {
    const isLoading = signal(true);
    const excercise = signal<Exercise | undefined>(undefined);

    this.httpClient.get<Exercise>(`${environment.apiUrl}/exercises/${id}`).subscribe((data) => {
      isLoading.set(false);

      const response = this.mapResponseEntryToDomain(data);
      excercise.set(response);
    });

    return {
      isLoading,
      value: excercise,
    };
  }

  private mapResponseEntryToDomain(entry: Exercise) {
    return entry;
  }
}
