import { Injectable, signal } from '@angular/core';
import { Signalizable } from '@shared/models/signalizable.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise.model';

@Injectable()
export class ExcercisesRepository {
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

  private mapResponseEntryToDomain(entry: Exercise) {
    return entry;
  }
}
