import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  api = {
    categorys: `${environment.apiUrls.art}/api/category`,
  };

  constructor(private httpClient: HttpClient) {}

  categorys$(params: any) {
    return this.httpClient.get(`${this.api.categorys}`, {params});
  }
  categorysShow$(id: any) {
    return this.httpClient.get(`${this.api.categorys}/${id}`);
  }
  addCategorys$(params: any) {
    return this.httpClient.post(`${this.api.categorys}`, params);
  }
  putCategorys$(id: any, params: any) {
    return this.httpClient.put(`${this.api.categorys}/${id}`, params);
  }
  deleteCategorys$(id: any) {
    return this.httpClient.delete(`${this.api.categorys}/${id}`);
  }
}
