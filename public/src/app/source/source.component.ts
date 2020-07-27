import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  id: any;
  news_sources: any;

  constructor(private _route: ActivatedRoute,
                private _http: HttpService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log("PARAMS", params)
      this.id = params['id']
    })
    this.retrieveSource(this.id);
  }

  addLike(item) {
    console.log("Here is the article", item)
    item.likes += 1
  }

  retrieveSource(id) {
    let observable = this._http.getSource(this.id)
    observable.subscribe(data => {
      console.log("We found one news source", data)
      this.news_sources = data['articles'];
      if (this.news_sources) {
        for (var x in this.news_sources) {
          // add likes property to article
          this.news_sources[x].likes = 0;
          // alt_Id added for use of likes, because some IDs are null initially
          this.news_sources[x].alt_id = x;
          this.news_sources[x].clicked = false;
        }
      }
    })
  }
}
