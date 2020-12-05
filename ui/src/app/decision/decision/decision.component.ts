import {Component, Input, OnInit} from '@angular/core';
import  { Event, Router, NavigationStart } from "@angular/router";
import {AuthenticationService} from "../../authentication.service";
import {isBoolean} from "util";

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})

export class DecisionComponent implements OnInit {
    forAuthUser: boolean;
    constructor(private router: Router, private authService: AuthenticationService )
    {
        this.router.events.subscribe(
            (ev: Event)=>{
                if(ev instanceof NavigationStart ){
                    this.subscribeto(ev);
                }
        })
    }
    private subscribeto(eventURL: NavigationStart){
        const URL = eventURL.url;
        console.log(URL);
        if (URL === '/dashboard')
        {
            this.authService.setAuthentication(true);
            this.forAuthUser = this.authService.getAuthentication();
        }
        if ( URL === '/login' )
        {
            this.authService.setAuthentication(false);
            this.forAuthUser = this.authService.getAuthentication();
        }
    }

  ngOnInit() {
      this.forAuthUser = this.authService.getAuthentication();
  }

}
