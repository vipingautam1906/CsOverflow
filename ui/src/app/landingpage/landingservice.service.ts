import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class LandingserviceService {
  constructor(private Http: HttpClient) { }


  public getQuotes(): Observable<any>{
     return this.Http.get("https://quotes.rest/qod");
  }
}
