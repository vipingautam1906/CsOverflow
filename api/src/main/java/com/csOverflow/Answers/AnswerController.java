package com.csOverflow.Answers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user/answer")
public class AnswerController {

    @Autowired
    AnswerRepository answerRepository;

    @PostMapping("/add")
    public AnswerEntity addAnswerInDB(@RequestBody AnswerEntity answer ){
        answerRepository.save(answer);
        return answer;
    }

    @GetMapping("")
    public List<AnswerEntity > getAnswerFromDB(){
        List<AnswerEntity> answerList;
        answerList  =  answerRepository.findAll();
        return  answerList;
    }
}
