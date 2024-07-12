import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExercisesModuleInitService {
  private static initialized = false;

  constructor() {
    if (!ExercisesModuleInitService.initialized) {
      this.init();
      ExercisesModuleInitService.initialized = true;
    }
  }

  private init() {
    console.log('Exercises Module has been initialized!');
    // Place your initialization code here
  }
}
