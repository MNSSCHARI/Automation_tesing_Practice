import { test, expect } from "@playwright/test";
import Homepage from "../pages/home.js"; // Adjust the path if necessary
import exp from "constants";
import Login_or_SignUp from  "../pages/login_signUp.js";
import Signup from "../pages/signupform.js";
import Delete_account from "../pages/delete_account.js";
import ContactUs from "../pages/contactus.js";

test.describe('Automation practice', () => {
    test("Register user", async ({ page }) => {
    //home page
        const homepag = new Homepage(page);  // Initialize inside test block
        await homepag.page_link(); // Replace with your URL
        await expect(page.locator('[alt="Website for automation practice"]')).toBeVisible();
        await homepag.signup_login().click();
    //Login or Signup Page
        const login_or_sign =new Login_or_SignUp(page);
        await expect(page.locator('[class="signup-form"] h2')).toBeVisible();
        await login_or_sign.signupname_field().fill("srinivas.machavaram");
        await login_or_sign.signupemail_field().fill("srinivas11@gmail.com");
        await login_or_sign.signupbtn().click();
    //signup details page
        const signup_form = new Signup(page);
        await expect(page.getByText('Enter Account Information')).toBeVisible();
        await signup_form.male_radiobtn().click();
        await signup_form.password_field().fill("Mnsschari@1");
        await signup_form.day_drpdwn().selectOption('1');
        await signup_form.month_drpdwn().selectOption('January');
        await signup_form.year_drpdwn().selectOption('2021');
        await signup_form.signup_chcbx().click();
        await signup_form.sploff_chcbx().click();
        await signup_form.first_name().fill("Mnss");
        await signup_form.last_name().fill("chari@1");
        await signup_form.company_name().fill("cognizant");
        await signup_form.address_first().fill("Hyderabad");
        await signup_form.address_second().fill("Bengaluru");
        await signup_form.country_drpdwn().selectOption('India');
        await signup_form.state().fill("Karnataka");
        await signup_form.city().fill("Bengaluru");
        await signup_form.zipcode().fill("50000");
        await signup_form.mobile_number().fill("123434647");
        // await page.pause();
        await signup_form.create_account_btn().click();
    //account creation confirmation page 
        await expect(signup_form.account_created_text()).toBeVisible();
        await signup_form.continue_btn().click();
    //home page
    // await page.pause();
        const user= await homepag.username();
        console.log(user);

        // await expect(homepag.username()).toBeVisible();
        // await homepag.delete_acc().click();
    //account deletion confirmation page
        // const delete_ac = new Delete_account(page);
        // await expect(delete_ac.delete_text()).toBeVisible();
        // await delete_ac.continue_btn().click();

        // await homepag.homebutton().click();  // Click action on home button
        // await expect(homepag.homebutton).toBeVisible();  // Assertion to check visibility
    });
});


test.describe('Valid', () => {
    test("Valid user", async ({ page }) => {
    //homepage
        const homepag = new Homepage(page);  // Initialize inside test block
        await homepag.page_link();
        await expect(page.locator('[alt="Website for automation practice"]')).toBeVisible();
        await homepag.signup_login().click();
    //login or signup_page
        const login_or_sign =new Login_or_SignUp(page);
        await expect(page.locator('[class="login-form"] h2')).toBeVisible();
        await login_or_sign.loginemail_field().fill("srinivas10@gmail.com");
        await login_or_sign.password_field().fill("Mnsschari@1");
        await login_or_sign.loginbtn().click();
        
        // await page.pause();
    //home page
        const user= await homepag.username();
        console.log(user);
        // await expect(homepag.username()).toBeVisible(); - //fail
        await homepag.delete_acc().click();
    //account deletion confirmation page
    //     const delete_ac = new Delete_account(page);
    //     await expect(delete_ac.delete_text()).toBeVisible();
    //     await delete_ac.continue_btn().click();

        // await homepag.homebutton().click();  // Click action on home button
        // await expect(homepag.homebutton).toBeVisible();  // Assertion to check visibility
    });
});


test.describe('Invalid', () => {
    test("InValid user", async ({ page }) => {
    //homepage
        const homepag = new Homepage(page);  // Initialize inside test block
        await homepag.page_link();
        await expect(page.locator('[alt="Website for automation practice"]')).toBeVisible();
        await homepag.signup_login().click();
    //login or signup_page
        const login_or_sign =new Login_or_SignUp(page);
        await expect(page.locator('[class="login-form"] h2')).toBeVisible();
        await login_or_sign.loginemail_field().fill("srinivas9@gmail.com");
        await login_or_sign.password_field().fill("Mnsschari@");
        await login_or_sign.loginbtn().click();
        await expect(page.locator('text="Your email or password is incorrect!"')).toBeVisible();
    //     // await page.pause();
    // //home page
    //     const user= await homepag.username();
    //     console.log(user);
    //     await expect(homepag.username()).toBeVisible();
    //     await homepag.delete_acc().click();
    // //account deletion confirmation page
    //     const delete_ac = new Delete_account(page);
    //     await expect(delete_ac.delete_text()).toBeVisible();
    //     await delete_ac.continue_btn().click();

        // await homepag.homebutton().click();  // Click action on home button
        // await expect(homepag.homebutton).toBeVisible();  // Assertion to check visibility
    });
});


test.describe('Logout', ()=>{
    test('Logout User', async({page})=>{
        //imported HomePage class 
        const home= new Homepage(page);
        //validate and navigate to login field
        await home.page_link();
        await expect(page).toHaveTitle(/Automation/);
        await home.signup_login().click();
        //imported Login or SignUp class 
        const login_sign = new Login_or_SignUp(page);
        await expect(page.getByText('Login to your account')).toBeVisible();
        await login_sign.loginemail_field().fill('srinivas11@gmail.com');
        await login_sign.password_field().fill('Mnsschari@1');
        await login_sign.loginbtn().click();
        //Login completed and try to logout
        await page.waitForTimeout(3000);
        await expect(page.locator("//*[text()='srinivas.machavaram']")).toBeVisible();
        await expect(home.username()).toBeVisible();
        await home.logout_btn().click();
        await expect(page).toHaveURL("https://www.automationexercise.com/login");       
    })
});


test.describe('Existing Email', ()=>{
    test('Validating Existing User', async({page})=>{
        //imported HomePage class 
        const home= new Homepage(page);
        //validate and navigate to login field
        await home.page_link();
        await expect(page).toHaveTitle(/Automation/);
        await home.signup_login().click();
        //imported Login or SignUp class 
        const login_sign = new Login_or_SignUp(page);
        await expect(page.getByText('New User Signup!')).toBeVisible();
        await login_sign.signupemail_field().fill('srinivas11@gmail.com');
        await login_sign.signupname_field().fill('Mnsschari');
        await login_sign.signupbtn().click();
        await expect(page.getByText('Email Address already exist!')).toBeVisible();
                
    })
});


test.describe('Form', ()=>{
    test('Contact Us Form', async({page})=>{
        const home=new Homepage(page);
        await home.page_link();
        await expect(page).toHaveTitle(/Automation/);
        await home.contactus_btn().click();
        await expect(page.locator("//h2[text()='Get In Touch']")).toBeVisible();
        const conus=new ContactUs(page);
        await conus.namefield().fill('narasimha');
        await conus.emailfield().fill('srinivas@9.gmail.com');
        await conus.subjectfield().fill('testing');
        await conus.messagefield().fill('this is my message');
        await conus.filefield().setInputFiles('A://Playwright_Learning//Playwright_Automation_Tesing-main//resources//IMG-20240501-WA0026.jpg');

    })
});