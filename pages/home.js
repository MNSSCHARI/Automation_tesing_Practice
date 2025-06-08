class Homepage{
    constructor(page){
        this.page=page
    }
    page_link(){
        return this.page.goto("https://www.automationexercise.com/");
    }
    signup_login(){
        return this.page.locator('[class="fa fa-lock"]');
    }
    homebutton(){
        return this.page.locator('[class="fa fa-home"]');
    }
    username(){
        return this.page.getByText('Logged in as');
    }
    delete_acc(){
        return this.page.getByText('Delete Account');
    }
    logout_btn(){
    return this.page.locator('//a[@href="/logout"]');
    }
    contactus_btn(){
        return this.page.locator('[href="/contact_us"]');
    }

}   
export default Homepage;