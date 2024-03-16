import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExcercisesRepository } from '../../services/excercises-repository.service';

@Component({
  selector: 'tfa-excercise-upsert',
  templateUrl: './excercise-upsert.component.html',
  styleUrl: './excercise-upsert.component.scss',
})
export class ExcerciseUpsertPageComponent {
  form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    imageUrl: new FormControl<string>('', Validators.required),
  });

  constructor(private excerciseRepository: ExcercisesRepository) {}

  save() {
    if (this.form.valid) {
      const input = {
        name: this.form.value.name!,
        imageUrl: this.form.value.imageUrl!,
      };

      this.excerciseRepository.add(input);
    }
  }
}
