import { Injectable, signal } from '@angular/core';
import { Signalizable } from '@shared/models/signalizable.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Excercise } from '../models/excercise.model';
import { Observable, map } from 'rxjs';

type AddExcerciseInput = {
  name: string;
  imageUrl: string;
};

@Injectable()
export class ExcercisesRepository {
  constructor(private httpClient: HttpClient) {}

  add(input: AddExcerciseInput, callback?: (excercise: Excercise) => void): Observable<Excercise> {
    return this.httpClient
      .post<Excercise>(`${environment.apiUrl}/excercises`, input)
      .pipe(map((response) => this.mapResponseEntryToDomain(response)));
  }

  getAll(): Signalizable<Excercise[]> {
    const isLoading = signal(true);
    const excercises = signal<Array<Excercise>>([]);

    this.httpClient.get<Excercise[]>(`${environment.apiUrl}/excercises`).subscribe((data) => {
      isLoading.set(false);

      const excercisesResponse = data.map((entry) => this.mapResponseEntryToDomain(entry));
      excercises.set(excercisesResponse);
    });

    return {
      isLoading,
      value: excercises,
    };
  }

  private mapResponseEntryToDomain(entry: Excercise) {
    return new Excercise(entry.id, entry.imageUrl, entry.name);
  }
}
