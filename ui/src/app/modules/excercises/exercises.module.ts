import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcercisesPageComponent } from './pages/excercises/excercises.component';
import { ExcerciseCardComponent } from './components/excercise-card/excercise-card.component';
import { SharedModule } from '@shared/shared.module';
import { ExercisesRepository } from './services/exercises-repository.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ExercisesDetailsPageComponent } from './pages/exercises-details/exercises-details-page.component';
import { ExercisesModuleInitService } from './services/exercises-module-init.service';
import { StoreModule } from '@ngrx/store';
import { exercisesReducer } from './store/exercises.reducer';
import { ExercisesEffects } from './store/exercises.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ExcerciseCardComponent, ExcercisesPageComponent, ExercisesDetailsPageComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule,
    EffectsModule.forFeature(ExercisesEffects),
    StoreModule.forFeature('exercises', exercisesReducer),
  ],
  providers: [ExercisesEffects,ExercisesRepository],
})
export class ExercisesModule {
  constructor(private _: ExercisesModuleInitService) {}
}
