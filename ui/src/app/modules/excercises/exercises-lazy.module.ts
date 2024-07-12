import { NgModule } from '@angular/core';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesModule } from './exercises.module';

@NgModule({
  imports: [ExercisesModule, ExercisesRoutingModule],
})
export class ExerciseLazyModule {}
