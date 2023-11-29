import { Component, Input } from '@angular/core';
import { TimeSerie } from '../../../../shared/models/time-serie';

@Component({
  selector: 'tfa-body-timeseries',
  templateUrl: './body-timeseries.component.html',
  styleUrl: './body-timeseries.component.scss'
})
export class BodyTimeseriesComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) timeSerie!: TimeSerie;
}
