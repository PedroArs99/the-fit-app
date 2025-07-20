import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SizeProp } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../icons.module';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    imports: [
        RouterModule,
        IconsModule,
    ],
    styleUrl: './nav-menu.component.css',
})
export class NavMenuComponent {
    iconSize: SizeProp = "2xl"
}
