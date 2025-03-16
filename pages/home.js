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

}   
export default Homepage;