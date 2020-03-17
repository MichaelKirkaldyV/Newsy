import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
    sites: any;
    outlets: string[] = [];
    news: any;
    logos: any;
    logos_: any;

  constructor(private _http: HttpService) {
    this.retrieveHeadlines();
    this.retrieveSources();
    this.retrieveNewsLogos();
  }

  retrieveHeadlines() {
    this._http.getTopHeadlines().subscribe(data => {
      this.sites = data;
    })
  }

  retrieveSources() {
    this._http.getSources().subscribe(data => {
      this.news = data;
      for(let source of this.news.sources) {
        this.outlets.push(source.name);
      }
    })
  }

  retrieveNewsLogos() {
    this._http.getAllLogos().subscribe(data => {
      console.log("Here are the logos...", data)
      this.logos_ = data
      for(let logo of this.logos_){
        this.logos.push(logo)
        console.log(this.logos)
      }
    })
  }

}// End of exports
