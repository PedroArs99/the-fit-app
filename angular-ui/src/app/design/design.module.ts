import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { IconsModule } from './icons.module';


@NgModule({
  declarations: [
    PageTitleComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
  ],
  exports: [
    PageTitleComponent,
  ]
})
export class DesignModule { }
