import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {QuestionsService} from "../questions.service";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class CommentandanswerService {
  constructor( private Http: HttpClient,
               private userSer: UserService,
               private questSer: QuestionsService

  ) { }
    userId: number;
    questionId: number;

    public addComment(comment: string){
        this.Http.post("http://localhost:8081/user/comments/commented",{
            "commentdata" : comment,
            "userid"    : this.questSer.user.id,
            "questionid" : this.questSer.currentQuestion.id,
            "username" : this.questSer.user.firstname
        }).toPromise().then(data=>{
            console.log(data);
        })
    }

    public addAnswer(answer: string){
        this.Http.post("http://localhost:8081/user/answer/add", {
            "answerdata": answer,
            "userid": this.questSer.user.id,
            "questionid": this.questSer.currentQuestion.id,
            "username" : this.questSer.user.firstname
        }).toPromise().then(data=>{
            console.log(data)
        })
    }

    public getComments(): Observable<any>
    {
        return this.Http.get("http://localhost:8081/user/comments");
    }

    public getAnswers(): Observable<any>{
        return this.Http.get("http://localhost:8081/user/answer");
    }
}
