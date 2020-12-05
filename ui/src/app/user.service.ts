import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {FormGroup} from "@angular/forms";
import {QuestionsService} from "./questions.service";

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  constructor(private httpclient: HttpClient, private questSer: QuestionsService ) { }
  posturl: string = "http://localhost:8081/users/adduser/";
  authURL: string = "http://localhost:8081/userAuthentication/login/";

  getAllUser(): Observable<any>
  {
      return this.httpclient.get('//localhost:8081/users/');
  }

  saveUser(firstName: string, lastName: string, emailId: string, pass: string, pnumber: string, cname: string, aboutme: string )
  {
    this.httpclient.post(this.posturl,
        {
            "firstname": firstName,
            "lastname": lastName,
            "emailid": emailId,
            "pass": pass,
            "pnumber": pnumber,
            "cname" : cname,
            "aboutme" : aboutme
        }).toPromise().then(data=>{
            console.log(data);
    });
  }

  doLogin(emailId: String, pass: String): Observable<any>
  {
      return this.httpclient.post(this.authURL,
          {
              emailid: emailId,
              pass: pass,
          })
  }

  updateUserProfile(pnumber: string, cname: string, upassword: string)
  {
      console.log(pnumber);
      console.log(cname)
      console.log(upassword)
      console.log(this.questSer.user.emailid);
      return this.httpclient.post("http://localhost:8081/users/updateUser",
          {
              "pnumber": pnumber,
              "upassword" : upassword,
              "cname" : cname,
              "emailid" : this.questSer.user.emailid
          }).toPromise().then(res=>{
              console.log(res)})
  }

}
