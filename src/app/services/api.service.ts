import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import appConfig from '../config/appConfig';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = environment.headers;
  constructor(private http: HttpClient) {}

  //GET APIs

  getMenu() {
    return this.http.get(`${appConfig.apiUrl}home/menu`, {
      headers: this.headers,
    });
  }

  getCareer() {
    return this.http.get(`${appConfig.apiUrl}home/careers`, {
      headers: this.headers,
    });
  }

  getCareerById(id: any) {
    return this.http.post(
      `${appConfig.apiUrl}home/careerbyid`,
      { id: id },
      {
        headers: this.headers,
      }
    );
  }
}
