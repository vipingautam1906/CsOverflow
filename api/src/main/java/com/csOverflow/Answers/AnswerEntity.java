package com.csOverflow.Answers;


import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="answer")
public class AnswerEntity {
    String answerdata;
    String username;
    String questionid;
    int userid;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @CreationTimestamp
    private Date cdate;

    public String getAnswerdata() {
        return answerdata;
    }

    public void setAnswerdata(String answerdata) {
        this.answerdata = answerdata;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getQuestionid() {
        return questionid;
    }

    public void setQuestionid(String questionid) {
        this.questionid = questionid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
