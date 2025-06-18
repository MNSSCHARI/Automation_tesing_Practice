import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
let browser, page;
        Given('I am on the login page', async function () {
          browser = await chromium.launch({ headless: false });
          const context = await browser.newContext();
          page = await context.newPage();
          await page.goto('https://rahulshettyacademy.com/client/');
         });

        When('I enter valid credentials', async function () {
          await page.locator("#userEmail").fill("srinivas.axium@gmail.com");
          await page.locator('#userPassword').fill("Mnsschari@1");
         });

        When('I click on the login button', async function () {
          await page.locator("[value='Login']").click();
          await page.waitForTimeout(3000);
         });

        Then('I should see a logout button', async function () {
          console.log("Login successful, logout button should be visible now.");
          await browser.close();
         });

         
         
         
         