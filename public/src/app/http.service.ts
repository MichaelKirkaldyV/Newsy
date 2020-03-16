import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api_key = '77fbb327135b47dd939102b7c73fefd1';
  api_url = 'http://localhost:8000/'
  

  constructor(private http: HttpClient) {}


  getTopHeadlines(){
    return this.http.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=77fbb327135b47dd939102b7c73fefd1');
  }

  getSources() {
    return this.http.get('http://newsapi.org/v2/sources?apiKey=77fbb327135b47dd939102b7c73fefd1');
  }

  getAllLogos() {
    console.log("In the service...getting logos")
    return this.http.get('api/showAll')
  }
  
}// End of export
