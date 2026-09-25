import puppeteer from 'puppeteer-core';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const pages = [
  'tour-packages',
  'private-tours',
  'blog',
  'our-story',
  'contact-us'
];

async function main() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const p of pages) {
    await page.goto(`http://localhost:3000/${p}`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: `docs/screenshot-${p}.png`, fullPage: false });
    console.log(`Saved docs/screenshot-${p}.png`);
  }

  await browser.close();
}

main().catch(console.error);
