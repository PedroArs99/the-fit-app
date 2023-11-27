import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icons } from './config/icons.config';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [FontAwesomeModule, RouterModule, SpinnerComponent],
})
export class SharedModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
