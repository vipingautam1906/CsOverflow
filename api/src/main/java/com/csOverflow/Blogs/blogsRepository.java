package com.csOverflow.Blogs;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface blogsRepository extends JpaRepository< blogEntity, Long> {
}
