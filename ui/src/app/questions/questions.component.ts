import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {QuestionsService} from "../questions.service";
import {questionsData, User} from "../models";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {AuthenticationService} from "../authentication.service";
import {CommentandanswerService} from "./commentandanswer.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnChanges  {
    @Input() InputFromParent = "";
    comment: string;
    answer: string;
    answerArray: Array<any>;
    currentQuestion: any;
    warningMsg: string;
    inputFromClick: string;
    isUserAuth = false;
    users: Array<any>;
    question: Array<any>;
    blogs: Array<any>;
    commentsArray: Array<any>;
    formGroup: FormGroup;
    blogsForm: FormGroup;
    answersform: FormGroup;
    questionCategory: string;
    questionDes: string;
    selectedfile: File;

  constructor(private questionsSer: QuestionsService,
              private userSer: UserService,
              private authSer: AuthenticationService,
              private comAndAns: CommentandanswerService
  ) { }

  ngOnChanges(){
      this.userSer.getAllUser()
          .subscribe(res=>{this.users=res;})

      this.questionsSer.getAllQuestionsInApp()
          .subscribe( data=>{ this.question = data;  console.log(data)})

      this.questionsSer.getBlogs()
          .subscribe( blogsResponses=>{ this.blogs = blogsResponses;})

      this.comAndAns.getComments()
          .subscribe( commments=>{ this.commentsArray = commments; console.log(commments) })

      this.comAndAns.getAnswers()
          .subscribe(answers=>{ this.answerArray = answers; })
  }

  ngOnInit()
  {
      this.formGroup = new FormGroup({
          qCategory: new FormControl(),
          description: new FormControl(),
          path: new FormControl()
          });

      this.answersform = new FormGroup({
          answer: new FormControl(),
          comment: new FormControl()
      })

      this.blogsForm = new FormGroup( {
          blogCategory : new FormControl(),
          postContent : new FormControl()
      });

      this.userSer.getAllUser()
          .subscribe(res=>{this.users=res;})

      this.questionsSer.getAllQuestionsInApp()
          .subscribe( data=>{ this.question = data;  console.log(data)})

      this.questionsSer.getBlogs()
          .subscribe( blogsResponses=>{ this.blogs = blogsResponses;})

      this.comAndAns.getComments()
          .subscribe( commments=>{ this.commentsArray = commments; console.log(commments) })

      this.comAndAns.getAnswers()
          .subscribe(answers=>{ this.answerArray = answers; })

  }
    public fileEvent(event)
    {
      this.selectedfile = <File>event.target.files[0];
    }

  onAddQuestion( receivedQuestion: string )
  {
      this.questionCategory  = this.formGroup.get('qCategory').value.toString();
      this.questionDes  = this.formGroup.get('description').value.toString();
      const formData = new FormData();
      const image = new FormData();
      formData.append('category', this.questionCategory);
      formData.append('description', this.questionDes);
      image.append('file', this.selectedfile, this.selectedfile.name);
      this.questionsSer.addQuestion(formData, image);
      this.formGroup.reset();
  }

    onClickSubmitPost(){
      const formdata = new FormData();
      formdata.append('blogCategory', this.blogsForm.get('blogCategory').value.toString());
      formdata.append('postContent', this.blogsForm.get('postContent').value.toString());
      this.questionsSer.postBlogs(formdata);
      this.blogsForm.reset();  /*reseting form fields..*/
    }

    onClickCurrentQuestion(currentQuestion){
        this.InputFromParent = "individualQuestions";
        this.currentQuestion = currentQuestion;
        this.questionsSer.setCurrentlySelectQuestion(currentQuestion);
        console.log("this is current questions"+currentQuestion.fileName)
    }

    isAuth(input: string){
        this.isUserAuth = this.authSer.getAuthentication();
        this.inputFromClick = input;
        console.log("current Auth status:   "+this.isUserAuth);
        if( this.isUserAuth != true ) {
            this.warningMsg = "Please log in or register to add a comment or answer!"
        }
    }

    onAddComment(){
        this.comment = this.answersform.get('comment').value.toString();
        this.comAndAns.addComment( this.comment );
        this.answersform.reset();
    }
    onAddAnswer(){
      this.answer = this.answersform.get('answer').value.toString();
      this.comAndAns.addAnswer( this.answer );
      this.answersform.reset();
    }


}
