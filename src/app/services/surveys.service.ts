import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SurveysService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  async getSurveys() {
    let headers = new HttpHeaders({ 'Accept': 'application/json', 'Authorization': 'Token zetokentest' });
    let response = this.http.get(this.apiUrl, { headers: headers });
    let data = await response.toPromise();
    return data;
  }

}
