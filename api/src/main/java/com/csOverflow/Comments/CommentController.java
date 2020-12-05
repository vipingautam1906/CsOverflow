package com.csOverflow.Comments;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user/comments")
public class CommentController {


    @Autowired
    CommentRepository commentRepository;

    @PostMapping("/commented")
    public commentEntity postCommentInDb(@RequestBody commentEntity comment){
        commentRepository.save(comment);
        return comment;
    }

    @GetMapping("")
    public List<commentEntity> getAllCommentsFromDB(){
        List<commentEntity> commentsList;
        commentsList = this.commentRepository.findAll();
        return commentsList;
    }


}
