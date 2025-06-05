import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SProductsService {
  api = {
    product: `${environment.apiUrls.art}/api/product`,
    subCategory: `${environment.apiUrls.art}/api/subcategory`,
    unitMeasure: `${environment.apiUrls.art}/api/unit-measure`,
    category: `${environment.apiUrls.art}/api/category`,
    brand: `${environment.apiUrls.art}/api/brand`,
  };

  constructor(private httpClient: HttpClient) {}

  products$(params: any) {
    return this.httpClient.get(`${this.api.product}`, {params});
  }
  productsShow$(id: any) {
    return this.httpClient.get(`${this.api.product}/${id}`);
  }
  addProducts$(params: any) {
    return this.httpClient.post(`${this.api.product}`, params);
  }
  putProducts$(id: any, params: any) {
    return this.httpClient.put(`${this.api.product}/${id}`, params);
  }
  deleteProduct$(id: any) {
    return this.httpClient.delete(`${this.api.product}/${id}`);
  }
  putProductsImages$(params: any, id:any) {
    return this.httpClient.post(`${this.api.product}/images/${id}`, params);
  }
  subCategory$(params: any) {
    return this.httpClient.get(`${this.api.subCategory}`, {params});
  }
  unitMeasery$(params: any) {
    return this.httpClient.get(`${this.api.unitMeasure}`, {});
  }
  category$(params: any) {
    return this.httpClient.get(`${this.api.category}`, {});
  }
  brand$(params: any) {
    return this.httpClient.get(`${this.api.brand}`, {});
  }
  search$(params: any) {
    return this.httpClient.get(`${this.api.product}/search`, {params});
  }
  addStock$(params: any) {
    return this.httpClient.post(`${this.api.product}/input`, params);
  }
}
