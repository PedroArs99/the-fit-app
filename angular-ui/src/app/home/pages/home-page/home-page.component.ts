import { Component } from '@angular/core';
import { DesignModule } from '../../../design/design.module';

@Component({
    selector: 'app-home-page',
    imports: [
        DesignModule
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'Today'
}
