import { Component, Input, OnInit } from '@angular/core';
import { TimeSerie, TimeSerieEntry } from '../../../../shared/models/time-serie';

@Component({
  selector: 'tfa-body-timeseries',
  templateUrl: './body-timeseries.component.html',
  styleUrl: './body-timeseries.component.scss',
})
export class BodyTimeseriesComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) timeSerie!: TimeSerie;
  @Input({ required: true }) unit!: string;

  lastValue!: TimeSerieEntry;
  variationFromTheBeginning!: number;


  ngOnInit(): void {
    const firstValue = this.timeSerie[0];

    this.lastValue = this.timeSerie[this.timeSerie.length -1]
    this.variationFromTheBeginning = this.lastValue.value - firstValue.value;

  }
}
