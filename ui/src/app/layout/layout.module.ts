import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';

@NgModule({
  declarations: [NavbarComponent, ThemeTogglerComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class LayoutModule {}
