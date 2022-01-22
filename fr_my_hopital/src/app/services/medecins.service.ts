import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class MedecinsService {
  baseUrl = 'http://localhost:9093/medecins';
  constructor(private http: HttpClient) {

  }
  getAllMedecins(): Observable<any> {
    return this.http.get(this.baseUrl + '/show');
  }

  saveMedecin(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', data);
  }

}
