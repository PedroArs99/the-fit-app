import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RunningHomeComponent } from './pages/running-home/running-home.component';

const routes: Route[] = [
  { path: '', component: RunningHomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class RunningRoutingModule { }
