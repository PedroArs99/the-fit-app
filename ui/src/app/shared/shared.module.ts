import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icons } from './config/icons.config';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToCamelCasePipe } from './pipes/to-camel-case.pipe';

@NgModule({
  declarations: [SpinnerComponent, ToasterComponent, ToCamelCasePipe],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [FontAwesomeModule, RouterModule, SpinnerComponent, ToasterComponent, ToCamelCasePipe],
})
export class SharedModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
