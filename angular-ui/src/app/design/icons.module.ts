import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHouse, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

const icons = [
  faHouse,
  faPersonRunning
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FaIconComponent
  ],
  exports: [
    FaIconComponent
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons)
  }
}
