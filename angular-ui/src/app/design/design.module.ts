import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { IconsModule } from './icons.module';
import { SectionHeaderComponent } from './section-header/section-header.component';

const components = [
  PageTitleComponent,
  SectionHeaderComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    IconsModule,
  ],
  exports: [
    ...components
  ]
})
export class DesignModule { }
