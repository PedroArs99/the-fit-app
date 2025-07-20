import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    PageTitleComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    NavMenuComponent
  ]
})
export class DesignModule { }
