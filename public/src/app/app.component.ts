import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      //Void state to default state, de
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})
export class AppComponent {
 
    articles: any;
    outlets: string[] = [];
    news: any;
    logos_: any;

  constructor(private _http: HttpService) {
    this.retrieveHeadlines();
    this.retrieveSources();
    this.retrieveNewsLogos();
  }

  retrieveHeadlines() {
    this._http.getTopHeadlines().subscribe(data => {
      this.articles = data['articles'];
      console.log(this.articles)
    })
  }

  retrieveSources() {
    this._http.getSources().subscribe(data => {
      this.news = data['sources'];
      console.log("Sources", this.news)
      for(let source of this.news.sources) {
        this.outlets.push(source.name);
      }
    })
  }

  retrieveNewsLogos() {
    this._http.getAllLogos().subscribe(data => {
      console.log("Here are the logos...", data)
      this.logos_ = data
    })
  }

}// End of exports
