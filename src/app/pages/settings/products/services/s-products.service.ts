import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SProductsService {
  api = {
    product: `${environment.apiUrls.art}/api/product`,
    type: `${environment.apiUrls.art}/api/sub-category`,
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
  putProductsImages$(params: any, id:any) {
    return this.httpClient.post(`${this.api.product}/images/${id}`, params);
  }
  productType$(params: any) {
    return this.httpClient.get(`${this.api.type}`, {});
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
