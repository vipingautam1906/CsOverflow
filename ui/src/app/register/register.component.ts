import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registrationForm: FormGroup;
    constructor(private userSer: UserService) {}


  ngOnInit() {
    this.registrationForm = new FormGroup({
          fname: new FormControl('', Validators.required),
          lname: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.required, Validators.email] ),
          pass: new FormControl('',[Validators.required, Validators.minLength(6)]),
          pnumber:  new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
          cname: new FormControl('', Validators.required),
          aboutme : new FormControl('', Validators.required)
    })
  }
    postUser()
    {
        this.userSer.saveUser(
            this.registrationForm.get('fname').value.toString(),
            this.registrationForm.get('lname').value.toString(),
            this.registrationForm.get('email').value.toString(),
            this.registrationForm.get('pass').value.toString(),
            this.registrationForm.get('pnumber').value.toString(),
            this.registrationForm.get('cname').value.toString(),
            this.registrationForm.get('aboutme').value.toString()
            )

        this.registrationForm.reset();
    }

}
