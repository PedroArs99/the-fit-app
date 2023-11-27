import { Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { MealsModule } from './modules/meals/meals.module';
import { Subscription } from 'rxjs';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MealsModule, LayoutModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  isRouterLoading = signal(false);
  private eventSubscription: Subscription | undefined;

  constructor(private router: Router) {
    this.eventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRouterLoading.set(true);
      }
      if (event instanceof NavigationEnd) {
        this.isRouterLoading.set(false);
      }
      if (event instanceof NavigationCancel) {
        this.isRouterLoading.set(false);
      }
      if (event instanceof NavigationError) {
        this.isRouterLoading.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.eventSubscription?.unsubscribe();
  }
}
