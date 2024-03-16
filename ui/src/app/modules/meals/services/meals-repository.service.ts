import { Injectable, signal } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Signalizable } from '@shared/models/signalizable.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class MealsRepository {
  constructor(private httpClient: HttpClient) {}

  getAll(): Signalizable<Meal[]> {
    const isLoading = signal(true);
    const meals = signal<Array<Meal>>([]);

    this.httpClient.get<Meal[]>(`${environment.apiUrl}/meals`).subscribe((data) => {
      isLoading.set(false);

      const mealsResponse = data.map((entry) => this.mapResponseEntryToDomain(entry));
      meals.set(mealsResponse);
    });

    return {
      isLoading,
      value: meals,
    };
  }

  getById(id: string): Observable<Meal> {
    return this.httpClient
      .get<Meal>(`${environment.apiUrl}/meals/${id}`)
      .pipe(map((response) => this.mapResponseEntryToDomain(response)));
  }

  private mapResponseEntryToDomain(entry: Meal) {
    return new Meal(entry.id, entry.imageUrl, entry.name, entry.nutritionalValues);
  }
}
