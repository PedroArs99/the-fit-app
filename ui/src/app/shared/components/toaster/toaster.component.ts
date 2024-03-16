import { Component } from '@angular/core';
import { ToasterService } from '@shared/services/toaster.service';

@Component({
  selector: 'tfa-toaster',
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
})
export class ToasterComponent {
  toasts = this.toaster.toasts;

  constructor(private toaster: ToasterService) {}
}
