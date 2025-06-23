
import { test, expect } from '@playwright/test';

test('testmana', async ({ page }) => {
//   await page.goto('https://manan.numpyninja.com/');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('button', { name: 'Continue with Google' }).click();
//   await page.getByRole('textbox', { name: 'Email or phone' }).fill('mnarasimha9182@gmail.com');
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('link', { name: 'Try again' }).click();
  await page.goto('https://manan.numpyninja.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('mnsschari');
  await page.getByRole('textbox', { name: 'Password' }).fill('mnsschari');
  await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('button', { name: 'Upload Blood Report (5' }).click();
//   await page.getByRole('button', { name: 'Upload Blood Report (5' }).setInputFiles('new.pdf');
//   await page.getByRole('button', { name: 'Upload Blood Report (5' }).click();
await page.setInputFiles('input[type="file"]', "C://Users//91918//Desktop//sterling-accuris-pathology-sample-report-unlocked.pdf");

//   await page.getByRole('button', { name: 'Upload Blood Report (5' }).setInputFiles('sterling-accuris-pathology-sample-report-unlocked.pdf');
//   await page.getByRole('button', { name: 'Analyze Case' }).click();
//   await page.getByRole('button', { name: 'Analyze Case' }).click();
});


test('sample1', async ({page}) => {
  await page.goto('https://www.worldometers.info/');
  const currentWorldPopulation = await page.locator('//span[@rel="current_population"]');
  const text = await currentWorldPopulation.textContent();
    console.log('Current World Population:', text);

});