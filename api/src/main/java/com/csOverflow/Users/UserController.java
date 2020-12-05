package com.csOverflow.Users;

import com.csOverflow.Users.entities.UserService;
import com.csOverflow.Users.entities.user;
import com.csOverflow.Users.entities.userhelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserService userService;

    userhelper helper = new userhelper();


    @GetMapping("")
    public List<user> getUsersfromDB()
    {
        return userService.returnAppUsers();
    }


    /*Below mapping adding user to Db..Before that we check
      if user with same email id exists in DB..if exits then we throw exception else
      just push the user in db
    */


    @PostMapping("/adduser")
    public void saveUserInDB(@RequestBody user us) throws Exception
    {
        String tempEmailId = us.getEmailid();
        if( tempEmailId != null && !"".equals(tempEmailId) )
        {
            user userObj = this.userService.CheckUserWithEmail( us.getEmailid() );
            if( userObj != null)
            {
                throw new Exception("User with email: "+tempEmailId+" already exits!");
            }
        }
         userService.saveGivenUserIndB(us);
    }



    @PostMapping("/updateUser")
    public user updateUserData(@RequestBody userhelper helper)
    {
        this.helper.setPnumber( helper.getPnumber() );
        this.helper.setUpassword( helper.getUpassword() );
        this.helper.setCname( helper.getCname() );
        this.helper.setEmailid( helper.getEmailid() );

        return this.userService.updateGivenUerData(this.helper);
    }

}
