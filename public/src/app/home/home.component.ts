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
      state('void', style({ display: 'none', opacity: 0 })),
      state("*", style({ display: 'block', opacity: 1})),
      // String is bi-directional for the transitional state --from void to default and default to void
      transition('void <=> *', [
        animate(500)
      ])
    ]) //End of trigger
  ] // End of animations
}) // End of component
export class HomeComponent implements OnInit {

    articles: any;
    outlets: string[] = [];
    news: any;
    logos_: any;
    art: any;
    current_state = "void"
    

    constructor(private _http: HttpService) {
      this.retrieveHeadlines();
      this.retrieveSources();
    }

  ngOnInit(): void {
  }

  addLike(article) {
    console.log("Here is the article", article)
    article.likes += 1
  }

  changeState(){
    if (this.current_state == "void") {
      this.current_state = "*"
    } else {
      this.current_state = "void"
    }
  }


  retrieveHeadlines() {
    this._http.getTopHeadlines().subscribe(data => {
      this.articles = data['articles'];
      console.log("ARTICLES-----", this.articles)
      this.articles[0].likes = 23;
      if (this.articles) {
        for (var x in this.articles) {
          this.articles[x].likes = 0;
          // alt_Id added for use of likes, some IDs are null.
          this.articles[x].alt_ID = x;
          this.articles[x].comments = [];
        }
      }
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
