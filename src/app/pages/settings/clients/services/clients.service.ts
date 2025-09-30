import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  api = {
    clients: `${environment.apiUrls.art}/api/client`,
  };

  constructor(private httpClient: HttpClient) {}

  clients$(params: any) {
    return this.httpClient.get(`${this.api.clients}`, {params});
  }
  clientsShow$(id: any) {
    return this.httpClient.get(`${this.api.clients}/${id}`);
  }
  addClients$(params: any) {
    return this.httpClient.post(`${this.api.clients}`, params);
  }
  putClients$(id: any, params: any) {
    return this.httpClient.put(`${this.api.clients}/${id}`, params);
  }
  deleteClients$(id: any) {
    return this.httpClient.delete(`${this.api.clients}/${id}`);
  }
}
