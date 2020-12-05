package com.csOverflow.Users.entities;

import com.csOverflow.Users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;


    userhelper helper = new userhelper();

    public List<user> returnAppUsers()
    {
        List<user> users;
        users = userRepository.findAll();
        return  users;
    }

    public void saveGivenUserIndB(user receievedUer)
    {
        userRepository.save(receievedUer);
    }
    public user CheckUserWithEmail(String userEmail)
    {
      return this.userRepository.findByEmailid(userEmail);
    }

    public user CheckUserWithEmailandPassword(String userEmail, String password)
    {
        return this.userRepository.findByEmailidAndAndPass(userEmail,password);
    }

    public user updateGivenUerData(userhelper helper){
        user existingUserToBeUpdated = this.userRepository.findByEmailid(helper.getEmailid());
        if( existingUserToBeUpdated != null )
        {
            existingUserToBeUpdated.setPnumber(helper.getPnumber());
            existingUserToBeUpdated.setCname(helper.getCname());
            existingUserToBeUpdated.setPass(helper.getUpassword());
            this.userRepository.save(existingUserToBeUpdated);
        }
        else
        {
            System.out.println("User Email Id is not in DB");
        }

       return existingUserToBeUpdated;
    }

}
