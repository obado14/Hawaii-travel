import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://gotourshawaii.com/';

const researchDir = path.resolve('docs/research/gotourshawaii/root');
const assetsDir = path.resolve('public/sites/gotourshawaii/root');

fs.mkdirSync(assetsDir, { recursive: true });

async function downloadFile(fileUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const client = fileUrl.startsWith('https') ? https : http;
    const req = client.get(fileUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = new globalThis.URL(redirectUrl, fileUrl).href;
        }
        return downloadFile(redirectUrl, outputPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${fileUrl}: status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(outputPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(outputPath);
      });
    });
    req.on('error', reject);
    req.setTimeout(20000, () => {
      req.destroy();
      reject(new Error('Download timeout'));
    });
  });
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 60000 });

    // Click all accordion titles to expand answers
    console.log('Expanding FAQs to extract questions and answers...');
    const faqData = await page.evaluate(async () => {
      const results = [];
      const accordions = document.querySelectorAll('.elementor-accordion .elementor-accordion-item, [data-elementor-type] .elementor-accordion-item');
      
      accordions.forEach((item) => {
        const titleEl = item.querySelector('.elementor-tab-title, a, h3, h4, [role="button"]');
        const contentEl = item.querySelector('.elementor-tab-content');
        results.push({
          question: titleEl?.innerText?.trim() || '',
          answer: contentEl?.innerText?.trim() || ''
        });
      });

      // If nothing found with class elementor-accordion-item, search generally:
      if (results.length === 0) {
        document.querySelectorAll('details, .accordion-item, .faq-item').forEach(item => {
          results.push({
            question: item.querySelector('summary, .title, h3, h4')?.innerText?.trim() || '',
            answer: item.querySelector('.content, p, .body')?.innerText?.trim() || ''
          });
        });
      }

      // Also grab all Visual Odyssey carousel images
      const odysseyImages = [];
      document.querySelectorAll('.elementor-image-carousel img, .slick-slide img, [class*="gallery"] img').forEach(img => {
        const src = img.getAttribute('nitro-lazy-src') || img.getAttribute('data-nitro-src') || img.getAttribute('data-src') || img.src;
        if (src && !src.startsWith('data:')) {
          odysseyImages.push(src);
        }
      });

      return {
        faqs: results,
        odysseyImages: [...new Set(odysseyImages)]
      };
    });

    console.log('FAQ extraction count:', faqData.faqs.length);
    console.log('Odyssey images count:', faqData.odysseyImages.length);

    fs.writeFileSync(path.join(researchDir, 'faqs.json'), JSON.stringify(faqData, null, 2));

    // Download assets
    console.log('Gathering asset URLs to download...');
    const deepData = JSON.parse(fs.readFileSync(path.join(researchDir, 'deep-data.json'), 'utf8'));

    const urlsToDownload = new Set();

    // From deepData images
    deepData.allImages.forEach(img => {
      if (img.src && !img.src.startsWith('data:')) urlsToDownload.add(img.src);
    });

    // From deepData bgImages
    deepData.bgImages.forEach(bg => {
      if (bg.url && !bg.url.startsWith('data:')) urlsToDownload.add(bg.url);
    });

    // From odysseyImages
    faqData.odysseyImages.forEach(url => {
      if (url && !url.startsWith('data:')) urlsToDownload.add(url);
    });

    console.log(`Downloading ${urlsToDownload.size} assets...`);
    const assetManifest = {};

    let index = 0;
    for (const fileUrl of urlsToDownload) {
      try {
        const parsedUrl = new globalThis.URL(fileUrl);
        const ext = path.extname(parsedUrl.pathname) || '.jpg';
        const baseName = path.basename(parsedUrl.pathname, ext);
        const safeName = `${baseName.replace(/[^a-zA-Z0-9_-]/g, '_')}${ext}`;
        const targetPath = path.join(assetsDir, safeName);
        
        console.log(`[${++index}/${urlsToDownload.size}] Downloading ${safeName}...`);
        await downloadFile(fileUrl, targetPath);
        assetManifest[fileUrl] = `/sites/gotourshawaii/root/${safeName}`;
      } catch (e) {
        console.warn(`Failed to download ${fileUrl}:`, e.message);
      }
    }

    fs.writeFileSync(path.join(researchDir, 'asset-manifest.json'), JSON.stringify(assetManifest, null, 2));
    console.log(`Asset downloading completed! Successfully downloaded ${Object.keys(assetManifest).length} files.`);

  } catch (err) {
    console.error('Error in extraction and downloading:', err);
  } finally {
    await browser.close();
  }
}

main();
