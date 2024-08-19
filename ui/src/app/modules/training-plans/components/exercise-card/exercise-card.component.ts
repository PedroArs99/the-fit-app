import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DiaryEntry, Exercise } from 'src/app/modules/excercises/models/exercise.model';
import { saveDiaryEntry } from 'src/app/modules/excercises/store/exercises.actions';

@Component({
  selector: 'tfa-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss',
})
export class ExerciseCardComponent {
  exercise = input.required<Exercise>();
  series = input.required<number>();
  reps = input.required<number>();

  private today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  diaryEntryForm = new FormGroup({
    date: new FormControl(this.today, [Validators.required]),
    load: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    private datePipe: DatePipe,
    private store: Store,
  ) {}

  addNewDiaryEntry() {
    if (this.diaryEntryForm.valid) {
      const newEntry = this.diaryEntryForm.value as unknown as DiaryEntry;
      this.store.dispatch(saveDiaryEntry({ exerciseId: this.exercise().id, entry: newEntry }));
    }
  }
}
