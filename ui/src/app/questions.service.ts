import { Injectable } from '@angular/core';
import {questionsData} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
    checker = false;
    user: any;
    currentQuestion: any;
    addQuestionURL = "http://localhost:8081/questions/add";
    constructor(private Http: HttpClient) {}

    addQuestion(formData: FormData, image: FormData)
    {
        this.Http.post("http://localhost:8081/questions/questionData", {
            "category" : formData.get('category'),
            "description" : formData.get('description')
        }).toPromise().then( res=>{
            console.log(res);
        })

        this.Http.post("http://localhost:8081/questions/add", image ).toPromise().then( res=>
        {
            console.log(res);
        })

    }

    setCurrentUser(user)
    {
        this.user = user;
    }

    getCurrentUser()
    {
        return this.user;
    }

    setCurrentlySelectQuestion(currentQuestion)
    {
        this.currentQuestion = currentQuestion;
    }


    getAllQuestionsInApp(): Observable<any>
    {
        return this.Http.get("http://localhost:8081/questions");
    }

    postBlogs(blogformData: FormData)
    {
        console.log(blogformData.get('blogCategory'))
        console.log(blogformData.get('postContent'))
        console.log(this.user.firstName)
        console.log(this.user.lastName)
        console.log(this.user.id)

        this.Http.post("http://localhost:8081/blog/upload", {
            "category" : blogformData.get('blogCategory'),
            "content" : blogformData.get('postContent'),
            "firstname" :   this.user.firstname,
            "lastname" :   this.user.lastname,
            "userid" : this.user.id
        }).toPromise().then( res=>{
            console.log(res);
        })
    }

    getBlogs(): Observable<any>
    {
        return this.Http.get("http://localhost:8081/blog");
    }
}
