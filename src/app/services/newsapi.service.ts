import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }
  // All News
  newApiUrl="https://newsapi.org/v2/top-headlines?country=eg&apiKey=131ed15b89f3490d802075a3e317cc78";

  //tech News
  techNewsApi="https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=131ed15b89f3490d802075a3e317cc78"

  //business News
  businessNewsApi="https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=131ed15b89f3490d802075a3e317cc78"

  //TopHeading()
    topHeading():Observable<any>{
      return this._http.get(this.newApiUrl);
    }
    // techNews
    techNews():Observable<any>{
      return this._http.get(this.techNewsApi);
    }

    //businessNews()
    businessNews():Observable<any>{
      return this._http.get(this.businessNewsApi);
    }
}
