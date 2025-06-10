import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SRSalesService {
  api = {
    report: `${environment.apiUrls.art}/api/sale`,
  };

  constructor(private httpClient: HttpClient) {}

  sales$(params: any) {
    return this.httpClient.get(`${this.api.report}/report`, {params});
  }
  // salesShow$(id: any) {
  //   return this.httpClient.get(`${this.api.report}/${id}`);
  // }
  // addBrands$(params: any) {
  //   return this.httpClient.post(`${this.api.report}`, params);
  // }
  // putBrands$(id: any, params: any) {
  //   return this.httpClient.put(`${this.api.report}/${id}`, params);
  // }
  // deleteBrands$(id: any) {
  //   return this.httpClient.delete(`${this.api.report}/${id}`);
  // }
}
