const {test, expect} = require('@playwright/test');
test ('UIElements',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//performed radio button action
await page.locator(".radioButton").first().click();
//performed selection of dropdown option 
await page.locator("#dropdown-class-example").selectOption('Option2');
//performed check action
await page.locator('#checkBoxOption1').click();
//expected the check is checked or not
await expect(page.locator('#checkBoxOption1').isChecked()).toBeTruthy();
//print the value is checked or not
console.log(await page.locator('#checkBoxOption1').isChecked());
//performed uncheck action
await page.locator('#checkBoxOption1').uncheck();
//added assertion the checkbox is checked or not
expect(await page.locator('#checkBoxOption1').isChecked()).toBeFalsy();
//stored the locator in the variable
const documentlink= page.locator("[href*='documents-request']"); 
//to check the blinking text in the page
await expect(documentlink).toHaveAttribute('class','blinkingText');
await documentlink.click();
//stored locator in variable  text
const text = await page.locator('.red').textContent();
console.log (text);
//perform split action
const arraytext=text.split("@");
const domain=arraytext[1].split(" ")[0];
console.log(domain);
// console.log(arraytext);
});