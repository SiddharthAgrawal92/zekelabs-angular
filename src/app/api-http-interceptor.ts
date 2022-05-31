import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request URL (Interceptor): ', req);
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer -a1m2-12m7x49-1cn1249c9n529n23-c50n9--913c53-c13c59-132793tc36n') });
        return next.handle(req).pipe(
            map(event => {
                if (event instanceof HttpResponse) {
                    event = event.clone({ body: this.modifyBody(event.body) });
                }
                return event;
            }), catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    console.log('Something went wrong at server end!');
                }
                return of(err);
            })
        )
    }

    modifyBody(body) {
        console.log(body);
        return body.filter(x => x.userId === 1);
    }

}