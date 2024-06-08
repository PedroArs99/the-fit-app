import { Injectable, OnDestroy, computed, signal } from '@angular/core';
import { Toast, ToastSeverity } from '@shared/models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToasterService implements OnDestroy {
  private _toasts = signal<Toast[]>([]);
  private cleanUpToastsJob: NodeJS.Timeout;

  readonly toasts = computed(this._toasts);

  constructor() {
    this.cleanUpToastsJob = setInterval(() => {
      this._toasts.update((toasts) => [...toasts.slice(1)]);
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.cleanUpToastsJob);
  }

  toast(message: string, severity: ToastSeverity) {
    this._toasts.update((toasts) => [
      ...toasts,
      {
        message,
        severity,
      },
    ]);
  }
}
