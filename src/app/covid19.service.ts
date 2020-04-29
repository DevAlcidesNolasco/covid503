import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  constructor(private http: HttpClient) { }
  getTotales() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/El%20Salvador');
  }
  getSummarys() {
    return this.http.get('https://api.covid19api.com/summary');
  }
  getTotalesHN() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/Honduras');
  }
  getTotalesGT() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/Guatemala');
  }
  getTotalesNG() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/Nicaragua');
  }
  getTotalesCR() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/Costa%20Rica');
  }
  getTotalesPM() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/Panama');
  }
  getTotalesBZ() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/Belize');
  }
}
