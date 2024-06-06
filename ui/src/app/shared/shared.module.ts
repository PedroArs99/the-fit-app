import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icons } from './config/icons.config';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToCamelCasePipe } from './pipes/to-camel-case.pipe';
import { AlertComponent } from './components/alert/alert.component';

const components = [AlertComponent, SpinnerComponent, ToasterComponent];

@NgModule({
  declarations: [...components, ToCamelCasePipe],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [...components, FontAwesomeModule, RouterModule, ToCamelCasePipe],
})
export class SharedModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
