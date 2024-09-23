import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly _HttpClient = inject(HttpClient);
  getAllCategories(): Observable<any> {
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/categories`);
  }
  getSpecificCategory(id: string | null): Observable<any> {
    return this._HttpClient.get(
      `${environment.BaseUrl}/api/v1/categories/${id}`
    );
  }

  getAllSubCategoriesOnCategory(id: string): Observable<any> {
    return this._HttpClient.get(
      `${environment.BaseUrl}/api/v1/categories/${id}/subcategories`
    );
  }
}
