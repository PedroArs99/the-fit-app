import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { ToasterService } from '@shared/services/toaster.service';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class ErrorToasterInterceptor implements HttpInterceptor {
  constructor(private toaster: ToasterService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let statusCode: number;
    let errorMessage: string;

    return next.handle(req).pipe(
      tap({
        error: (error: HttpErrorResponse) => {
          statusCode = error.status;
          errorMessage = JSON.stringify(errorMessage);

          console.error(`Http Error: ${statusCode} - ${errorMessage}`);
        },
      }),
      finalize(() => {
        if (statusCode < 200 || statusCode > 299) this.toaster.toast(`Error: ${errorMessage}`, 'error');
      }),
    );
  }
}

export const errorToasterHttpInterceptor: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorToasterInterceptor,
  multi: true,
};
