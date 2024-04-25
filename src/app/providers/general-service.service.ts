import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityDataService, IResponse, END_POINTS } from '../providers/utils';

@Injectable()
export class GeneralService extends EntityDataService<IResponse> {
    constructor(protected override httpClient: HttpClient) {
        super(httpClient, END_POINTS.elart);
    }

    public nameAll$(serviceName: any): Observable<IResponse> {
        return this.httpClient.get<IResponse>(`${this.endPoint}/${serviceName}`);
    }
    public nameParams$(serviceName: any, params: any): Observable<IResponse> {
        return this.httpClient.get<IResponse>(`${this.endPoint}/${serviceName}`, { params });
    }
    public nameId$(serviceName: any, id: any): Observable<IResponse> {
        return this.httpClient.get<IResponse>(`${this.endPoint}/${serviceName}/${id}`);
    }

    public addNameData$(serviceName: any, data: any): Observable<IResponse> {
        return this.httpClient.post<IResponse>(`${this.endPoint}/${serviceName}`, data);
    }
    public addName$(serviceName: any): Observable<IResponse> {
        return this.httpClient.post<IResponse>(`${this.endPoint}/${serviceName}`, {});
    }

    public deleteNameId$(serviceName: any, id: any): Observable<IResponse> {
        return this.httpClient.delete<IResponse>(`${this.endPoint}/${serviceName}/${id}`);
    }

    public updateNameIdData$(serviceName: any, id: any, data: any): Observable<IResponse> {
        return this.httpClient.put<IResponse>(`${this.endPoint}/${serviceName}/${id}`, data);
    }
    public updateNameData$(serviceName: any, data: any): Observable<IResponse> {
        return this.httpClient.put<IResponse>(`${this.endPoint}/${serviceName}`, data);
    }
    public updateNameId$(serviceName: any, id: any): Observable<IResponse> {
      return this.httpClient.put<IResponse>(`${this.endPoint}/${serviceName}/${id}`, {});
    }
    public addNameDataPublic$(serviceName: any, data: any): Observable<IResponse> {
        return this.httpClient.post<IResponse>(`${serviceName}`, data);
    }
}

