import { Injectable, signal } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Signalizable } from '../../../shared/models/signalizable.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MealsRepository {
  constructor(private httpClient: HttpClient) {}

  getAll(): Signalizable<Meal[]> {
    const isLoading = signal(true);
    const meals = signal<Array<Meal>>([]);

    this.httpClient.get<Meal[]>(`${environment.apiUrl}/meals`)
      .subscribe((data) => {
        isLoading.set(false);

        const mealsResponse = data.map(entry => new Meal(entry.imageUrl, entry.name));
        meals.set(mealsResponse);
      })

    return {
      isLoading,
      value: meals,
    };
  }
}
