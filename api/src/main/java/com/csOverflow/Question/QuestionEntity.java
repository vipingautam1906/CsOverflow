package com.csOverflow.Question;



public class QuestionEntity {
    private String fileName;
    private String fileType;
    private String fileUrl;
    private int userId;


    public QuestionEntity(String questionCategory, String questionDescription, String filePath, int userId) {
        this.fileName = questionCategory;
        this.fileType = questionDescription;
        this.fileUrl = filePath;
        this.userId = userId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
