/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environment';
import { jwtDecode } from 'jwt-decode';
import { IUser } from '../Interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _HttpClient = inject(HttpClient);
  userData!: IUser;

  signUp(userDate: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.BaseUrl}/api/v1/auth/signup`,
      userDate
    );
  }

  signIn(userDate: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.BaseUrl}/api/v1/auth/signin`,
      userDate
    );
  }
  forgetPassword(userDate: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.BaseUrl}/api/v1/auth/forgotPasswords`,
      userDate
    );
  }
  verifyResetCode(userDate: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.BaseUrl}/api/v1/auth/verifyResetCode`,
      userDate
    );
  }

  resetPassword(userDate: object): Observable<any> {
    return this._HttpClient.put(
      `${environment.BaseUrl}/api/v1/auth/resetPassword`,
      userDate
    );
  }

  setUserToken(s: string) {
    localStorage.setItem('userToken', s);
    console.log(s);
    this.userData = jwtDecode(s);
  }
  getUserToken() {
    const t = localStorage.getItem('userToken');
    if (t !== null) {
      this.userData = jwtDecode(t);
    }
    return t;
  }

  deleteUserToken() {
    localStorage.removeItem('userToken');
  }
}
