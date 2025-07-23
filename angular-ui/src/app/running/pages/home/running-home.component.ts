import { Component } from '@angular/core';
import { DesignModule } from "../../../design/design.module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-running-home',
  imports: [
    DesignModule,
    RouterModule
  ],
  templateUrl: './running-home.component.html',
  styleUrl: './running-home.component.css'
})
export class RunningHomeComponent {

}
