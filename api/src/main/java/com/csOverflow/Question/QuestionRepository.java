package com.csOverflow.Question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface QuestionRepository  extends JpaRepository<question, Long>{
    public question findByFileName(String filename);   //method normally works as findBy"give column name first capital"
}
