import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdministrationManagementService {

  constructor(private httpClient: HttpClient) {
  }
}