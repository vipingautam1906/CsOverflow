import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csOverflow';
   value: string= 'login';

    topbarOrdashboard: string = 'topbar';
    check: boolean = false;

    onselect(decision: string){
      this.value = decision;
  }

    onselectdashboard(temp :string){
        this.topbarOrdashboard =  temp;
    }

}
