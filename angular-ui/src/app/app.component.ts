import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignModule } from './design/design.module';
import { NavMenuComponent } from './design/nav-menu/nav-menu.component';

@Component({
    selector: 'app-root',
    imports: [
        DesignModule,
        NavMenuComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}
