import puppeteer from 'puppeteer-core';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://gotourshawaii.com/', { waitUntil: 'networkidle2' });

  const heroBgs = await page.evaluate(() => {
    const heading = document.querySelector('h1') || document.querySelector('h2');
    let curr = heading;
    const res = [];
    while (curr && curr !== document.body) {
      const cs = window.getComputedStyle(curr);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') {
        res.push({
          tag: curr.tagName,
          className: curr.className,
          backgroundImage: cs.backgroundImage
        });
      }
      curr = curr.parentElement;
    }
    return res;
  });

  console.log('Hero backgrounds found:', JSON.stringify(heroBgs, null, 2));
  await browser.close();
}

main();
