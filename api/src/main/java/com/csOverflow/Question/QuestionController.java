package com.csOverflow.Question;

import com.csOverflow.Question.questionCategory;
import com.csOverflow.Security.CredentialsController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    QuestionService questionService;
    @Autowired
    CredentialsController credentialsController;
    @Autowired
    QuestionRepository questionRepository;

    questionCategory categoryInfo = new questionCategory();

    @PostMapping("/questionData")
    public questionCategory posQuestionData(@RequestBody  questionCategory questionData)
    {
        categoryInfo.setCategory( questionData.category );
        categoryInfo.setDescription( questionData.description );
        System.out.println(questionData.category);
        System.out.println(questionData.description);
        return  categoryInfo;
    }
    @PostMapping("/add")
    public QuestionEntity uploadQuestion(@RequestParam("file") MultipartFile file)
    {
        int userId = credentialsController.loggedinUserId();
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        question question = new question();    //creating object so that we set values..
        try {
            question.setDoc_file( file.getBytes() );
        } catch (IOException e) {
            throw new RuntimeException("Error reading the file"+e);
        }

        /*below is just building the URL so that we can save the file and download from same URL*/
        String url = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/questions/download/")
                .path(fileName)
                .toUriString();
        String fileType  = file.getContentType();
        QuestionEntity questionEntityObj = new QuestionEntity(fileName, fileType , url, userId );

        question.setUserId(userId);
        question.setCategory( categoryInfo.getCategory() );
        question.setQuestion_data( categoryInfo.getDescription());
        question.setFileName(fileName);
        question.setUrl(url);

        questionRepository.save(question);
        return questionEntityObj;
    }

    @GetMapping("/download/{filename}")
    public ResponseEntity<byte[]> downloadSingleFile(@PathVariable String filename, HttpServletRequest request)
    {
        System.out.println(filename);
        question question =  questionRepository.findByFileName(filename);  //this goes in rep and finds by filename
        System.out.println(question);
        String mimeType = request.getServletContext().getMimeType(question.getFileName()); //getting the filetype from Servelet Context

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(mimeType))
                .header( HttpHeaders.CONTENT_DISPOSITION, "inline;fileName="+ question.getFileName() )
                /*.header( HttpHeaders.CONTENT_DISPOSITION, "inline;fileName="+ resource.getFilename() )*/
                .body(question.getDoc_file());

    }

    @GetMapping("")
    public List<question> getAllQuestions()
    {
        List<question> questions;
        questions = questionRepository.findAll();
        return  questions;
    }

// method is returning Docfile which is basically byte array hence response entity type assigned as byte[]
}
