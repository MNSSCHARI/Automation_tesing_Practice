const {test} = require('@playwright/test')
test ('Client app',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client/');
await page.locator("#userEmail").fill("srinivas.axium@gmail.com");
await page.locator('#userPassword').fill("Mnsschari@1");
await page.locator("[value='Login']").click();
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);

})