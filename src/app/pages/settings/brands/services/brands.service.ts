import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  api = {
    brands: `${environment.apiUrls.art}/api/brand`,
  };

  constructor(private httpClient: HttpClient) {}

  brands$(params: any) {
    return this.httpClient.get(`${this.api.brands}`, {params});
  }
  brandsShow$(id: any) {
    return this.httpClient.get(`${this.api.brands}/${id}`);
  }
  addBrands$(params: any) {
    return this.httpClient.post(`${this.api.brands}`, params);
  }
  putBrands$(id: any, params: any) {
    return this.httpClient.put(`${this.api.brands}/${id}`, params);
  }
  deleteBrands$(id: any) {
    return this.httpClient.delete(`${this.api.brands}/${id}`);
  }
}
