import { Component, Injector, effect } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExcercisesRepository } from '../../services/excercises-repository.service';
import { Observable, catchError } from 'rxjs';
import { ToasterService } from '@shared/services/toaster.service';
import { Router } from '@angular/router';
import { MuscleGroup } from '../../models/excercise.model';

@Component({
  selector: 'tfa-excercise-upsert',
  templateUrl: './excercise-upsert.component.html',
  styleUrl: './excercise-upsert.component.scss',
})
export class ExcerciseUpsertPageComponent {
  muscleGroups = Object.keys(MuscleGroup);

  form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    imageUrl: new FormControl<string>('', Validators.required),
    muscleGroup: new FormControl<MuscleGroup>(MuscleGroup.ABS, Validators.required)
  });

  constructor(
    private excerciseRepository: ExcercisesRepository,
    private router: Router,
    private toaster: ToasterService
  ) {}

  save() {
    if (this.form.valid) {
      const input = {
        name: this.form.value.name!,
        imageUrl: this.form.value.imageUrl!,
        muscleGroup: this.form.value.muscleGroup,
      };

      this.excerciseRepository.add(input).subscribe((excercise) => {
        this.router.navigate(['/excercises']);
        this.toaster.toast(`${excercise.name} Has been successfully added.`, 'success');
      });
    }
  }
}
