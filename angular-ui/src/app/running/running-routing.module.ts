import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RunningHomeComponent } from './pages/home/running-home.component';
import { ShoesPageComponent } from './pages/shoes/shoes-page.component';

const routes: Route[] = [
  { path: '', component: RunningHomeComponent },
  { path: 'shoes', component: ShoesPageComponent }
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
