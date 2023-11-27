import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaConfig,
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { icons } from './config/icons.config';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule, SpinnerComponent,],
})
export class SharedModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
