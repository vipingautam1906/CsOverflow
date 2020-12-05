import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {UserService} from "../user.service";
import {QuestionsService} from "../questions.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    tempEmail: String;
    tempPass: String;
    error: string="";
  constructor( private router: Router, private authService: AuthenticationService, private userSer: UserService, private questSer: QuestionsService) {
  }
  ngOnInit()
  {
      this.loginForm = new FormGroup( {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required, Validators.minLength(6)] )
      });

  }

    onselect(url: string)
    {
        this.tempEmail = this.loginForm.get('email').value.toString();
        this.tempPass = this.loginForm.get('password').value.toString();

        this.userSer.doLogin(this.tempEmail, this.tempPass).subscribe(
            loggedInUserObject=>{
                this.questSer.setCurrentUser(loggedInUserObject);
                console.log(this.questSer.user.emailid);
                this.authService.setAuthentication(true);
                this.router.navigate([url]);
                },
            error=>{
                console.log("Erorr occured"+error);
                this.error = "Bad Credentials!";
            }
        )
        this.loginForm.reset();
    }
}
