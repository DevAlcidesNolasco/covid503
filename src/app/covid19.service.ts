import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }
  
  getTotales(){
    return this.http.get('https://api.covid19api.com/total/dayone/country/El%20Salvador');
  }

  getSummarys(){
    return this.http.get('https://api.covid19api.com/summary');
  }
}
