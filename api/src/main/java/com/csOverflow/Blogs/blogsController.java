package com.csOverflow.Blogs;


import com.csOverflow.Security.CredentialsController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/blog")
public class blogsController {

    @Autowired
    blogsRepository blogsRepository;

    @Autowired
    CredentialsController credentialsController;

    @PostMapping("/upload")
    public blogEntity postQuestion(@RequestBody blogEntity SingleBlog){
        return blogsRepository.save(SingleBlog);
    }

    @GetMapping("")
    public List<blogEntity> getAllBlogsfromDB()
    {
        List<blogEntity> blogs = this.blogsRepository.findAll();
        return blogs;
    }

}
