import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    forAuthUser = false;
  constructor() { }

  setAuthentication(truthValue: boolean){
      this.forAuthUser = truthValue;
      console.log(this.forAuthUser);
  }
  getAuthentication(){
      return this.forAuthUser;
      console.log(this.forAuthUser);
  }

}
