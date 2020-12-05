import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {QuestionsService} from "../questions.service";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

    userName: string;
    userEmailId: string;
    lastName: string;
    college: string;
    aboutme: string;
    updateForm: FormGroup;
  constructor(private questionSer: QuestionsService ) { }

  ngOnInit() {
      this.userName = this.questionSer.getCurrentUser().firstname;
      this.userEmailId = this.questionSer.getCurrentUser().emailid;
      this.lastName = this.questionSer.getCurrentUser().lastname;
      this.college = this.questionSer.getCurrentUser().cname;
      this.aboutme = this.questionSer.getCurrentUser().aboutme;
      this.updateForm = new FormGroup({
          pnumber: new FormControl(''),
          password: new FormControl(''),
          cname: new FormControl('')
      })
  }

}
