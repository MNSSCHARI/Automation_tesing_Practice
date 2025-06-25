// to create a playwright code we should import the test and built in package to the code
// 
// const {test} = require('@playwright/test')
// test('demo', async ({browser})=>
// {
//     const context = await browser.newContext();
//     const page=await context.newPage();
//     await page.goto("http://tssstrust.com");
// });

//or
//if you want to test particular tests only then use
//test.only syntax

const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');
test('Sign In Page', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/locatorspractice/");
    
    console.log(await page.title()); // Print the page title to the console
    await expect(page).toHaveTitle("Rahul Shetty Academy - Login page");
    await page.locator('input#inputUsername').fill("srinivas.machavaram");
    await page.locator('[placeholder="Password"]').fill("Mnsschari@1");
    await page.locator('button[type="submit"]').click();
    // A way to retrive the error and print
    // const error = page.locator(".error");
    // await expect(error).toContainText('Incorrect username or password');
    // console.log(await error.textContent());

    //another way to retrive the data and print
    console.log(await page.locator('.error').textContent());
    await expect(page.locator('.error')).toContainText('Incorrect');

    

});

test('nth elemnts', async ({ browser }) => {
    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/");
    console.log(await page.title()); // Print the page title to the console
    await expect(page).toHaveTitle("GreenKart - veg and fruits kart");

    // A way to retrive the error and print
    // const error = page.locator(".error");
    // await expect(error).toContainText('Incorrect username or password');
    // console.log(await error.textContent());

    //another way to retrive the data and print
    // await expect(page.locator('.error')).toContainText('Incorrect');
    const text = page.locator('.product-name'); 
    console.log(await text.nth(0).textContent());
    console.log(await text.allTextContents());
    
    //stored the locator inside a vairable 
    const courselink = page.locator('.blinkingText');
    
    //if we want to execute parllel code lines 
    await Promise.all([
        //verified wherether the link is correct or not
    expect(courselink).toHaveAttribute('class', 'cart-header-navlink blinkingText'),
    //performed click action
    await courselink.click(),
    ])
    //to create a child page from the main page
    const Newpage = await Context.waitForEvent('page');
    const item1 = Newpage.locator("[href*='cypress-modern-automation-testing-from-scratch-framework']");
    await Newpage.waitForTimeout(3000);
    await item1.first().click();
    // await page.pause();
});