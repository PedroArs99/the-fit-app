import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunningRoutingModule } from './running-routing.module';
import { ShoeCardComponent } from './components/shoe-card/shoe-card.component';

@NgModule({
  declarations: [
    ShoeCardComponent
  ],
  imports: [
    CommonModule,
    RunningRoutingModule
  ]
})
export class RunningModule { }
