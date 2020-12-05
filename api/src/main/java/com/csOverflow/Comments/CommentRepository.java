package com.csOverflow.Comments;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<commentEntity, Integer > {
}
