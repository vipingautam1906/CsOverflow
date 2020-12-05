package com.csOverflow.Security;
import com.csOverflow.Users.entities.UserService;
import com.csOverflow.Users.entities.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/userAuthentication")
public class CredentialsController {
    int userId;

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public user doLogin(@RequestBody user us) throws Exception
    {
        String tempEmailId = us.getEmailid();
        String tempPassword = us.getPass();

        user userobj = null;

        if( tempEmailId != null && tempPassword !=null )
        {
            userobj = this.userService.CheckUserWithEmailandPassword(tempEmailId, tempPassword);
        }

        if (userobj==null)
        {
            throw new Exception("Bad Credentials");
        }
        this.userId = userobj.getId();


        return userobj;
    }

    public int loggedinUserId(){ return this.userId; }
    //this is returning Id to QuestionController so that file file we can attach id for mapping..


}
