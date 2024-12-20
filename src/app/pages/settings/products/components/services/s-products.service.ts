import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SProductsService {
  api = {
    product: `${environment.apiUrls.art}/api/product`,
    type: `${environment.apiUrls.art}/api/type`,
    unitMeasure: `${environment.apiUrls.art}/api/unit-measure`,
    category: `${environment.apiUrls.art}/api/category`,
    brand: `${environment.apiUrls.art}/api/brand`,
  };

  constructor(private httpClient: HttpClient) {}

  products$(params: any) {
    return this.httpClient.get(`${this.api.product}`, {params});
  }
  addProducts$(params: any) {
    return this.httpClient.post(`${this.api.product}`, params);
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
}
