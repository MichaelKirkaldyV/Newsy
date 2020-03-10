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

  constructor(private _http: HttpService) {
    console.log('app component constructor called'); 
    this.retrieveHeadlines();
    this.retrieveSources();
    this.retriveNewsLogos();
  }

  retrieveHeadlines() {
    this._http.getTopHeadlines().subscribe(data => {
      this.sites = data;
      console.log("Here are the sites requested", this.sites);
    })
  }

  retrieveSources() {
    this._http.getSources().subscribe(data => {
      this.news = data;
      console.log("SOURCES", this.news)
      for(let source of this.news.sources) {
        this.outlets.push(source.name);
      }
      console.log("OUTLETS", this.outlets)
    })
  }

  retriveNewsLogos() {
    let observable = this._http.getAllLogos()
    observable.subscribe(data => {
      console.log("Here are the logos...", data)
      this.logos = data
      for(let logo of this.logos){
        this.logos.push(logo)
      }
    })
  }
}// End of exports
