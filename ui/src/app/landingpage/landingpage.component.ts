import { Component, OnInit } from '@angular/core';
import {LandingserviceService} from "./landingservice.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
    quoteArray:any;
    dailyQuote: string;
    quoteAuther: string;
  constructor( private landingSer: LandingserviceService ) { }
    ngOnInit() {
      this.landingSer.getQuotes()
          .subscribe( data=>{
              this.quoteArray = data;
              this.dailyQuote = this.quoteArray.contents.quotes[0].quote;
              this.quoteAuther = this.quoteArray.contents.quotes[0].author;
      })
  }

}
