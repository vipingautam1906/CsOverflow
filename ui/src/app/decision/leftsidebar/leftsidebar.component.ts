import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../authentication.service";

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
  constructor(private authService: AuthenticationService) { }
  @Output() clickInLeftSidePanel = new EventEmitter<string>();
  check: boolean;
  ngOnInit() {
      this.check = this.authService.getAuthentication();
  }
  onClickLeftPanel(clickedButton: string){
    this.clickInLeftSidePanel.emit(clickedButton);

  }

}
