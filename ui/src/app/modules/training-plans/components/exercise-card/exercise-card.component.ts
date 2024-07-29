import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/modules/excercises/models/exercise.model';

@Component({
  selector: 'tfa-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss',
})
export class ExerciseCardComponent {
  exercise = input.required<Exercise>();
  series = input.required<number>();
  reps = input.required<number>();

  today = this.datePipe.transform(new Date(), 'yyyy-MM-dd')

  diaryEntryForm = new FormGroup({
    date: new FormControl(this.today, [Validators.required]),
    load: new FormControl(25, [Validators.required]),
  });

  constructor(private datePipe: DatePipe) {
    console.log(this.today);
  }

  addNewDiaryEntry() {
    const newEntry = this.diaryEntryForm.value;
  }
}
