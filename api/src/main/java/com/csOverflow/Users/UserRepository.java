package com.csOverflow.Users;

import com.csOverflow.Users.entities.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <user, Integer> {
    public user findByEmailid(String emailid);
    //declared the method here because it's not there in jpaRepo made it for email verification for regist
    public user findByEmailidAndAndPass(String emailid, String pass);
    public user findById(int id);
}
