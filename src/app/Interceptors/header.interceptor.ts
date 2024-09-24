import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
	const _AuthService = inject(AuthService);
	const h = _AuthService.getUserToken();
	if (h !== null) {
		req = req.clone({
			setHeaders: {
				token: h	,
			},
		});
	}
	return next(req);
};
