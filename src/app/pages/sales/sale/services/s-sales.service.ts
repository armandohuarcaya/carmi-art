import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SSalesService {
  api = {
    sale: `${environment.apiUrls.art}/api/sale`,
    product: `${environment.apiUrls.art}/api/product`,
    client: `${environment.apiUrls.art}/api/client`,
  };

  constructor(private httpClient: HttpClient) {}

  listSale$(params: any) {
    return this.httpClient.get(`${this.api.sale}`, {params});
  }
  showSale$(id: any) {
    return this.httpClient.get(`${this.api.sale}/${id}`, {});
  }
  addSale$(params: any) {
    return this.httpClient.post(`${this.api.sale}`, params);
  }
  updateSale$(id:any, params: any) {
    return this.httpClient.put(`${this.api.sale}/${id}`, params);
  }
  updateStatusSale$(id:any, params: any) {
    return this.httpClient.put(`${this.api.sale}/status/${id}`, params);
  }
  search$(params: any) {
    return this.httpClient.get(`${this.api.product}/search`, {params});
  }
  generatePdf$(id:any) {
    return this.httpClient.post(`${this.api.sale}/generate-pdf/${id}`,{}, {
      responseType: 'blob'  // 👈 Importante
    });
  }

  addClient$(params: any) {
    return this.httpClient.post(`${this.api.client}`, params);
  }
  listClient$(params: any) {
    return this.httpClient.get(`${this.api.client}`, {params});
  }
}
