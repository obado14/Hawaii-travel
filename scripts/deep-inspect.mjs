import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://gotourshawaii.com/';

const screenshotDir = path.resolve('docs/design-references/gotourshawaii/root');
const researchDir = path.resolve('docs/research/gotourshawaii/root');

async function main() {
  console.log('Launching Chrome for deep inspection...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log(`Navigating to ${URL}...`);
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 });

    // Scroll down gradually to trigger all NitroPack and Elementor lazy loaders
    console.log('Scrolling page to trigger lazy loading...');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 150);
      });
    });

    // Wait 4 seconds for images & sliders
    await new Promise(r => setTimeout(r, 4000));

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 1000));

    console.log('Capturing fully loaded desktop screenshot...');
    await page.screenshot({
      path: path.join(screenshotDir, 'desktop-full.png'),
      fullPage: true
    });

    // Inspect real image sources, CSS, reviews, FAQs, and topology
    const deepData = await page.evaluate(() => {
      // Helper to get real source
      function getRealSrc(el) {
        return el.getAttribute('nitro-lazy-src') ||
               el.getAttribute('data-nitro-src') ||
               el.getAttribute('data-src') ||
               el.getAttribute('data-lazy-src') ||
               el.currentSrc ||
               el.src;
      }

      const allImages = [...document.querySelectorAll('img')].map(img => ({
        src: getRealSrc(img),
        alt: img.alt || '',
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        className: img.className,
        parent: img.parentElement?.tagName
      })).filter(img => img.src && !img.src.startsWith('data:image/svg+xml;base64'));

      // Background images
      const bgImages = [];
      document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage;
        if (bg && bg !== 'none' && bg.includes('url(')) {
          const match = bg.match(/url\(["']?([^"']+)["']?\)/);
          if (match && match[1] && !match[1].startsWith('data:image/svg+xml')) {
            bgImages.push({
              url: match[1],
              element: el.tagName.toLowerCase(),
              className: el.className
            });
          }
        }
      });

      // Extract Visual Odyssey carousel items
      const carouselItems = [];
      document.querySelectorAll('.slick-slide, [class*="carousel"], [class*="gallery"]').forEach(slide => {
        const img = slide.querySelector('img');
        const text = slide.textContent?.trim();
        if (img || text) {
          carouselItems.push({
            imgSrc: img ? getRealSrc(img) : null,
            alt: img?.alt || '',
            text: text?.slice(0, 100)
          });
        }
      });

      // Extract Reviews
      const reviews = [];
      // look for review cards
      document.querySelectorAll('[class*="review"], [class*="testimonial"]').forEach(rev => {
        const text = rev.textContent?.trim();
        if (text && text.length > 20) {
          reviews.push(text);
        }
      });

      // Extract FAQs
      const faqs = [];
      document.querySelectorAll('.elementor-accordion-item, .elementor-tab-title, [class*="faq"]').forEach(faq => {
        faqs.push(faq.textContent?.trim());
      });

      // Colors & Typography
      const styles = {
        primaryColors: [],
        fontFamilies: []
      };

      return {
        allImages,
        bgImages,
        carouselItems,
        reviews,
        faqs
      };
    });

    fs.writeFileSync(path.join(researchDir, 'deep-data.json'), JSON.stringify(deepData, null, 2));
    console.log(`Deep inspection complete! Found ${deepData.allImages.length} real images, ${deepData.bgImages.length} background images.`);

  } catch (err) {
    console.error('Error during deep inspection:', err);
  } finally {
    await browser.close();
  }
}

main();
