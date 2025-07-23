import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
    standalone: false,
    styleUrl: './page-title.component.css',
})
export class PageTitleComponent {
  @Input({ required: true }) title!: string;
  @Input() withBackNavigation: boolean = false;
}
