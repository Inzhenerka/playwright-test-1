const playwright = require('playwright');

async function takeScreenshot() {
    // Launch the browser
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a website
    await page.goto('https://example.com');

    // Take a screenshot
    await page.screenshot({ path: 'example.png' });

    // Close the browser
    await browser.close();
}

takeScreenshot();
