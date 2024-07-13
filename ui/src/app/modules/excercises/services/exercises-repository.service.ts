import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class ExercisesRepository {
  constructor(private httpClient: HttpClient) {}

  delete(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/exercises/${id}`);
  }

  getAll() {
    return this.httpClient
      .get<Exercise[]>(`${environment.apiUrl}/exercises`)
      .pipe(map((data) => data.map((entry) => this.mapResponseEntryToDomain(entry))));
  }

  getById(id: number): Observable<Exercise | undefined> {
    return this.httpClient
      .get<Exercise>(`${environment.apiUrl}/exercises/${id}`)
      .pipe(map((data) => this.mapResponseEntryToDomain(data)));
  }

  private mapResponseEntryToDomain(entry: Exercise) {
    return entry;
  }
}
