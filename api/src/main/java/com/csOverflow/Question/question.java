package com.csOverflow.Question;
import javax.persistence.*;


@Entity
@Table(name="question")
public class question {
    private String fileName;
    private int userId;
    private String question_data;
    private  String category;
    private String url;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private byte[] doc_file;

    public byte[] getDoc_file() {
        return doc_file;
    }

    public void setDoc_file(byte[] doc_file) {
        this.doc_file = doc_file;
    }

    public String getFileName() {

        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getQuestion_data() {
        return question_data;
    }

    public void setQuestion_data(String question_data) {
        this.question_data = question_data;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
