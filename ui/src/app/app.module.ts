import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecisionComponent } from './decision/decision/decision.component';
import { TopbarComponent } from './decision/topbar/topbar.component';
import { LeftsidebarComponent } from './decision/leftsidebar/leftsidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import {AuthenticationService} from "./authentication.service";
import {QuestionsService} from "./questions.service";
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import { IndividualQuestionComponent } from './questions/individual-question/individual-question.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



@NgModule({
  declarations: [
    AppComponent,
    DecisionComponent,
    TopbarComponent,
    LeftsidebarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    QuestionsComponent,
    IndividualQuestionComponent,
    UserhomeComponent,
    LandingpageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
  ],
    providers: [
        AuthenticationService,
        QuestionsService,
        UserService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
