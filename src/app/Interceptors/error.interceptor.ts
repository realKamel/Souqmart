import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  //const _ToastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // _ToastrService.error(err.error.message, "FreshCart");
      console.error(err);
      return throwError(() => {
        return err;
      });
    })
  );
};
