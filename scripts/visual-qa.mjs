import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const LOCAL_URL = 'http://localhost:3000/';
const qaDir = path.resolve('docs/research/gotourshawaii/root/qa');

fs.mkdirSync(qaDir, { recursive: true });

async function main() {
  console.log('Connecting to Chrome for Visual QA...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log(`Navigating to ${LOCAL_URL}...`);
    await page.goto(LOCAL_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Scroll page smoothly down to trigger all images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let total = 0;
        const dist = 400;
        const timer = setInterval(() => {
          window.scrollBy(0, dist);
          total += dist;
          if (total >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 1000));

    console.log('Taking full page desktop screenshot of clone...');
    await page.screenshot({
      path: path.join(qaDir, 'cloned-desktop.png'),
      fullPage: true
    });

    console.log('Testing mobile view...');
    await page.setViewport({ width: 390, height: 844 });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({
      path: path.join(qaDir, 'cloned-mobile.png'),
      fullPage: true
    });

    console.log('Testing interactive modal...');
    await page.setViewport({ width: 1440, height: 900 });
    await new Promise(r => setTimeout(r, 500));
    // Click book now button
    const bookNowBtn = await page.$('button');
    if (bookNowBtn) {
      await page.evaluate(() => {
        const btn = [...document.querySelectorAll('button')].find(b => b.textContent && b.textContent.includes('BOOK NOW'));
        if (btn) btn.click();
      });
      await new Promise(r => setTimeout(r, 800));
      await page.screenshot({
        path: path.join(qaDir, 'cloned-modal.png'),
      });
      console.log('Captured modal screenshot!');
    }

    console.log('Visual QA screenshots saved to docs/research/gotourshawaii/root/qa/');
  } catch (err) {
    console.error('Visual QA error:', err);
  } finally {
    await browser.close();
  }
}

main();
