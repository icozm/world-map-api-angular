import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CountryInfo {
  name: string;
  capitalCity: string;
  region: { id: string; value: string };
  incomeLevel: { id: string; value: string };
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = 'https://api.worldbank.org/v2/country/';

  constructor(private http: HttpClient) {}

  getCountryData(code: string): Observable<any> {
    const url = `${this.baseUrl}${code}?format=json`;
    return this.http.get<any>(url);
  }
}
