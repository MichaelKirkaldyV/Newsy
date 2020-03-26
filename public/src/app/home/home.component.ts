import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { trigger, state, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      // Defines style for the void state.
      state('void', style({ opacity: 0 })),
      state("*", style({ opacity: 1})),
      // String is bi-directional for the transitional state --from void to default and default to void
      transition('void <=> *', [
        animate(500)
      ])
    ]) //End of trigger
  ] // End of animations
})
export class HomeComponent implements OnInit {

    articles: any;
    outlets: string[] = [];
    news: any;
    logos_: any;

    constructor(private _http: HttpService) {
      this.retrieveHeadlines();
      this.retrieveSources();
    }

  ngOnInit(): void {
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
      for(let source of this.news) {
        this.outlets.push(source.name);
      }
    })
  }
} // End of exports
