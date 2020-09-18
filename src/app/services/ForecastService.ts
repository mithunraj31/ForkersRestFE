import { Order } from './../models/Order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ForecastService {

    private forecastUrl = environment.APIURL + '/order/forecast/';
    private forecastProductUrl = environment.APIURL + '/product/forecast/';
    private kittingUrl = environment.APIURL + '/kitting/forecast/';
    private shukkaUrl = environment.APIURL + '/shippingbase/forecast/';
    private nyuShukkaUrl = environment.APIURL + '/shippedbase/forecast/';
    private forecastUrlTemp = 'assets/data/foreccast.json';
    constructor(private http: HttpClient) {

    }
    getForecast() {
        return this.http.get<Order[]>(this.forecastUrl);
    }
    getProductForecast(year: number, month: number, patternId: number = 0) {
        if (patternId > 0) {
          const params = new HttpParams();
          params.append('pattern', patternId.toString());
          return this.http.get<any[]>(this.forecastProductUrl + year + '/' + (month + 1), { params });
        }

        return this.http.get<any[]>(this.forecastProductUrl + year + '/' + (month + 1));
        // return this.http.get<any[]>(this.forecastUrl);
    }
    getKittingForcast(year: number, month: number) {
        return this.http.get<any[]>(this.kittingUrl + year + '/' + (month + 1));
    }
    getShukkaForcast(year: number, month: number) {
        return this.http.get<any[]>(this.shukkaUrl + year + '/' + (month + 1));
    }
    getNyuShukkaForcast(year: number, month: number) {
        return this.http.get<any[]>(this.nyuShukkaUrl + year + '/' + (month + 1));
    }


}
