import { test, expect } from "@playwright/test";
import Homepage from "../pages/home.js"; // Adjust the path if necessary
import exp from "constants";
import Login_or_SignUp from "../pages/login_or_signUp.js";
import Signup from "../pages/signupform.js";
import Delete_account from "../pages/delete_account.js";

test.describe('Valid and Invalid', () => {
    test("Valid user", async ({ page }) => {
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