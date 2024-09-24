/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../Environments/environment';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class WishlistService {
	private readonly _HttpClient = inject(HttpClient);
	private readonly _PLATFORM_ID = inject(PLATFORM_ID);
	private readonly _AuthService = inject(AuthService);
	private readonly userHeader = this._AuthService.getUserToken();
	inWishListProudctsIds: string[] = [];
	getLoggedUserWishlist(): Observable<any> {
		return this._HttpClient.get(`${environment.BaseUrl}/api/v1/wishlist`, {
			headers: { token: this.userHeader! },
		});
	}
	addProductToWishlist(id: string): Observable<any> {
		return this._HttpClient.post(`${environment.BaseUrl}/api/v1/wishlist`, {
			productId: `${id}`,
		});
	}
	removeProductFromWishlist(id: string): Observable<any> {
		return this._HttpClient.delete(
			`${environment.BaseUrl}/api/v1/wishlist/${id}`
		);
	}
}
