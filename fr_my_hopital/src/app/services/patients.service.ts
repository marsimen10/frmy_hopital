import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  baseUrl = 'http://localhost:9093/patients';
  constructor(private http: HttpClient) {

  }
  getAllPatients(): Observable<any> {
    return this.http.get(this.baseUrl + '/gets');
  }

  saveCompany(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', data);
  }

  getCompany(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/gets/' + id);
  }

}
