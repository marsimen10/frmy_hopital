import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils.service';
import {LoginRequest} from '../../models/auth/LoginRequest.model';
import {JwtResponse} from '../../models/auth/JwtResponse.model';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }



  login(loginRequest:LoginRequest):Observable<JwtResponse> {
    return this.http.post<JwtResponse>(UtilsService.API_AUTH, loginRequest);

  }

}
