import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastService} from '../core/toast/toast.service';
import {ToastTypes} from '../core/toast/toast-types.enum';

@Injectable()
export class ApiInterceptor {
    constructor(private toastService: ToastService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(request)
            .pipe(catchError(response => {
                if (response.error) {
                    this.toastService.showToast(response.error, ToastTypes.Error);
                }
                return throwError(response);
            }));
    }
}
