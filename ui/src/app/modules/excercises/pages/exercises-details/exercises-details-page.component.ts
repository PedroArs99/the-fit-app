import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Exercise } from '../../models/exercise.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'tfa-exercises-details-page',
  templateUrl: './exercises-details-page.component.html',
  styleUrl: './exercises-details-page.component.scss',
})
export class ExercisesDetailsPageComponent {
  exercise = toSignal<Exercise>(this.activatedRoute.data.pipe(map(({ exercise }) => exercise)));

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => console.log(data));
  }
}
