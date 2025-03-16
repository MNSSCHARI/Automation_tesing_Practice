class Login_or_SignUp{
    constructor(page){
        this.page=page
    }

    //Login fields
    loginemail_field(){
        return this.page.locator('[data-qa="login-email"]');
    }
    password_field(){
        return this.page.locator('[placeholder="Password"]')
    }
    loginbtn(){
        return this.page.locator('[type="submit"]').nth(0);
    }

//Signup fields
    name_field(){
        return this.page.locator('[name="name"]');
    }
    signupemail_field(){
        return this.page.locator('[data-qa="signup-email"]');
    }
    signupbtn(){
        return this.page.locator('[type="submit"]').nth(1);
    }


}
export default Login_or_SignUp;