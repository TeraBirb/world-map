import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'https://api.worldbank.org/V2/country/';

  constructor(private http: HttpClient) { }

  callAPI(countryId: string) {
    return this.http.get(this.url + countryId + '?format=json');
  }
}
