import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(environment.token_key)}`,
    });
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem(environment.token_key)}`) });

        // send the newly created request
        return next.handle(authReq)
            .catch(err => {
                // onError
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        localStorage.removeItem(environment.token_key);
                        this.router.navigate(['/auth']);
                    }
                }
                return Observable.throwError(err);
            }) as any;
    }
}
