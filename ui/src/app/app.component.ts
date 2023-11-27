import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { MealsModule } from './modules/meals/meals.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MealsModule,
    LayoutModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
