import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = 'https://api.worldbank.org/V2/country/';

  constructor(private http: HttpClient) { }

  // ● accepts a country name as an input parameter that returns additional information gathered from the API for the selected country
  callAPI(countryId: string) {
    return this.http.get(this.url + countryId + '?format=json');
  }

  // ● will trigger the API call when a country is selected and set a local variable that will receive the information about the country for display in the right column of the HTML page
  // due to async nature of method, the local variable is set in the world-map component
  setCountryInfo(countryId: string) {
    return this.callAPI(countryId);
  }

}