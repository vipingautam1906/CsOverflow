import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../questions.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    editprofileclicked = false;
  constructor(private questionSer: QuestionsService, private userSer: UserService) { }
    userName: string;
    userEmailId: string;
    lastName: string;
    updateForm: FormGroup;
    pnumber: string;
    cname: string;
    upassword: string;

  ngOnInit()
  {
    this.userName = this.questionSer.getCurrentUser().firstname;
    this.userEmailId = this.questionSer.getCurrentUser().emailid;
    this.lastName = this.questionSer.getCurrentUser().lastname;
    this.updateForm = new FormGroup({
        pnumber: new FormControl(''),
        upassword: new FormControl(''),
        cname: new FormControl('')
    })
  }
    onselecteditprofile(edit:string){
    this.editprofileclicked = true;
    }

    onClickSave(){
        this.pnumber = this.updateForm.get('pnumber').value.toString();
        this.cname = this.updateForm.get('cname').value.toString();
        this.upassword =this.updateForm.get('upassword').value.toString();

        this.userSer.updateUserProfile(this.pnumber,this.cname,this.upassword);
    }
}
