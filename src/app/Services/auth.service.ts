/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environment';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '../Interfaces/iuser';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _HttpClient = inject(HttpClient);
	userData = signal({} as IUser);

	signUp(userData: object): Observable<any> {
		return this._HttpClient.post(
			`${environment.BaseUrl}/api/v1/auth/signup`,
			userData
		);
	}

	signIn(userData: object): Observable<any> {
		return this._HttpClient.post(
			`${environment.BaseUrl}/api/v1/auth/signin`,
			userData
		);
	}

	forgetPassword(userData: object): Observable<any> {
		return this._HttpClient.post(
			`${environment.BaseUrl}/api/v1/auth/forgotPasswords`,
			userData
		);
	}

	verifyResetCode(userData: object): Observable<any> {
		return this._HttpClient.post(
			`${environment.BaseUrl}/api/v1/auth/verifyResetCode`,
			userData
		);
	}

	resetPassword(userData: object): Observable<any> {
		return this._HttpClient.put(
			`${environment.BaseUrl}/api/v1/auth/resetPassword`,
			userData
		);
	}

	setUserToken(s: string) {
		if (localStorage !== undefined) {
			localStorage.setItem('userToken', s);
			this.userData.set(jwtDecode(s));
		}
	}

	getUserToken() {
		let t: string | null = null;
		if (localStorage !== undefined) {
			t = localStorage.getItem('userToken');
			if (t !== null) {
				this.userData.set(jwtDecode(t));
			}
		}
		return t;
	}

	deleteUserToken() {
		if (localStorage !== undefined) {
			localStorage.removeItem('userToken');
		}
	}
}
