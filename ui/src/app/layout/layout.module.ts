import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, ThemeTogglerComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavbarComponent],
})
export class LayoutModule {}
