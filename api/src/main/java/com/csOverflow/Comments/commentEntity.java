package com.csOverflow.Comments;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="comments")
public class commentEntity {
    String commentdata;
    String username;
    int userid;
    int questionid;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @CreationTimestamp
    private Date cdate;

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public String getCommentdata() {
        return commentdata;
    }

    public void setCommentdata(String commentdata) {
        this.commentdata = commentdata;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getQuestionid() {
        return questionid;
    }

    public void setQuestionid(int questionid) {
        this.questionid = questionid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
