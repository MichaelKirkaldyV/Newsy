import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
}) // End of component
export class HomeComponent implements OnInit {

    articles: any;
    outlets: string[] = [];
    news: any;
    logos_: any;
    art: any;


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

  changeState(article){
    console.log("We found an article", article)
    article.clicked = true;
  }

  retrieveHeadlines() {
    this._http.getTopHeadlines().subscribe(data => {
      this.articles = data['articles'];
      console.log("ARTICLES-----", this.articles)
      if (this.articles) {
        for (var x in this.articles) {
          // add likes property to article
          this.articles[x].likes = 0;
          // alt_Id added for use of likes, because some IDs are null initially
          this.articles[x].alt_id = x;
          this.articles[x].clicked = false;
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
