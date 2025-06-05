import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategorysService {
  api = {
    subCategorys: `${environment.apiUrls.art}/api/subcategory`,
    categorys: `${environment.apiUrls.art}/api/category`,
  };

  constructor(private httpClient: HttpClient) {}

  subCategorys$(params: any) {
    return this.httpClient.get(`${this.api.subCategorys}`, {params});
  }
  subCategorysShow$(id: any) {
    return this.httpClient.get(`${this.api.subCategorys}/${id}`);
  }
  addSubCategorys$(params: any) {
    return this.httpClient.post(`${this.api.subCategorys}`, params);
  }
  putSubCategorys$(id: any, params: any) {
    return this.httpClient.put(`${this.api.subCategorys}/${id}`, params);
  }
  deleteSubCategorys$(id: any) {
    return this.httpClient.delete(`${this.api.subCategorys}/${id}`);
  }
  categorys$(params: any) {
    return this.httpClient.get(`${this.api.categorys}`, {params});
  }
}
