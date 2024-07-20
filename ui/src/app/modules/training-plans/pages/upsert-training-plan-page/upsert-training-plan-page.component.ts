import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExercisesRepository } from 'src/app/modules/excercises/services/exercises-repository.service';
import { TrainingPlansRepository } from '../../services/training-plans-repository.service';
import { TrainingPlan } from '../../models/training-plan.model';
import {  Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tfa-upsert-training-plan-page',
  templateUrl: './upsert-training-plan-page.component.html',
  styleUrl: './upsert-training-plan-page.component.scss',
})
export class UpsertTrainingPlanPageComponent {
  exercises = toSignal(this.exerciseRepository.getAll());

  trainingPlanForm = this.formBuilder.group({
    name: ['', Validators.required],
    workouts: this.formBuilder.array([]),
  });

  get workouts() {
    return this.trainingPlanForm.get('workouts') as FormArray;
  }

  constructor(
    private exerciseRepository: ExercisesRepository,
    private formBuilder: FormBuilder,
    private trainingPlanRepository: TrainingPlansRepository,
    private router: Router,
  ) {}

  addNewExercise(workoutIndex: number) {
    const workout = this.workouts.at(workoutIndex) as FormGroup;
    const exercises = workout.get('exercises') as FormArray;

    exercises.push(
      this.formBuilder.group({
        exerciseId: ['', Validators.required],
        series: ['', [Validators.required, Validators.min(0)]],
        reps: ['', [Validators.required, Validators.min(0)]],
      }),
    );
  }

  addNewWorkout() {
    this.workouts.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        exercises: this.formBuilder.array([]),
      }),
    );
  }

  save() {
    const value = this.trainingPlanForm.value;
    const parsedValue = {
      ...value,
      workouts: value.workouts?.map((w: any) => ({
        ...w,
        exercises: w.exercises.map((e: any) => ({
          ...e,
          exercise: {
            id: e.exerciseId,
          },
        })),
      })),
    } as TrainingPlan;

    this.trainingPlanRepository.create(parsedValue).subscribe((trainingPlan) => {
      console.log(trainingPlan);
      this.router.navigate(['/training-plans', trainingPlan.id]);
    });
  }
}
