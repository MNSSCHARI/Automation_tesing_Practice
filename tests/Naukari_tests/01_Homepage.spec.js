import { test, expect } from "@playwright/test";
import path from "path";  // Import path module
import fs from "fs"; 

test.describe("Naukri Application", () => {
  test("Login Page", async ({ page }) => {
    // Open Naukri website
    await page.goto("https://www.naukri.com/");
    console.log(await page.title());

    // Click login button
    await page.locator('[id="login_Layer"]').click();
    expect(await page.locator('[class="orSec"]')).toBeVisible();

    // Fill in credentials and login
    await page.locator('[placeholder="Enter your active Email ID / Username"]').fill("mnarasimha9182@gmail.com");
    await page.locator('[placeholder="Enter your password"]').fill("Mnsschari@1");
    await page.locator('[class="btn-primary loginButton"]').click();
   
    // Navigate to profile page
    await page.getByRole("link", { name: "View profile" }).click();

    // **Correct File Path**
    const filePath = "C:/Users/91918/Playwright_Auto_Vs/tests/Naukari_tests/Srinivas_Resume.docx";

    console.log("Using File Path:", filePath);

    // **Check if the file exists**
    // if (!fs.existsSync(filePath)) {
    // throw new Error(`File does not exist: ${filePath}`);
    // }

    // Upload file
    await page.locator("#attachCV").setInputFiles(filePath);

    console.log("File uploaded successfully!");
    });
    });