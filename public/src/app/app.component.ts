import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {

  articles: any;
  outlets: string[] = [];
  news: any;
  logos_: any;
  current_state = "void"
  _id: any;


  constructor(private _http: HttpService, private router: Router, private activateRoute: ActivatedRoute) {
    this.retrieveSources();
  }

  ngOnInit(): void {
  }

  changeState(){
    if (this.current_state == "void") {
      this.current_state = "*"
    } else {
      this.current_state = "void"
    }
  }

  // Gets sources for dropdown list.
  retrieveSources() {
    this._http.getSources().subscribe(data => {
      this.news = data['sources'];
      for(let source of this.news) {
        this.outlets.push(source.name);
      }
    })
  }
}// End of exports
