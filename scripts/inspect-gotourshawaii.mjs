import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://gotourshawaii.com/';

const screenshotDir = path.resolve('docs/design-references/gotourshawaii/root');
const researchDir = path.resolve('docs/research/gotourshawaii/root');
const componentsDir = path.resolve('docs/research/gotourshawaii/root/components');
const assetsDir = path.resolve('public/sites/gotourshawaii/root');

fs.mkdirSync(screenshotDir, { recursive: true });
fs.mkdirSync(researchDir, { recursive: true });
fs.mkdirSync(componentsDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

async function main() {
  console.log('Launching Chrome...');
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

    // Wait a couple seconds for fonts & animations
    await new Promise(r => setTimeout(r, 3000));

    console.log('Taking desktop full-page screenshot...');
    await page.screenshot({
      path: path.join(screenshotDir, 'desktop-full.png'),
      fullPage: true
    });

    console.log('Taking mobile full-page screenshot...');
    await page.setViewport({ width: 390, height: 844 });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({
      path: path.join(screenshotDir, 'mobile-full.png'),
      fullPage: true
    });

    // Reset back to desktop
    await page.setViewport({ width: 1440, height: 900 });
    await new Promise(r => setTimeout(r, 1000));

    console.log('Extracting global assets and tokens...');
    const globalData = await page.evaluate(() => {
      // 1. Meta & Title
      const title = document.title;
      const metas = [...document.querySelectorAll('meta')].map(m => ({
        name: m.getAttribute('name') || m.getAttribute('property'),
        content: m.getAttribute('content')
      })).filter(m => m.name && m.content);

      // 2. Favicons
      const favicons = [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({
        rel: l.getAttribute('rel'),
        href: l.href,
        sizes: l.sizes?.toString()
      }));

      // 3. Images
      const images = [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        className: img.className,
        id: img.id
      })).filter(img => img.src && !img.src.startsWith('data:image/svg+xml;base64,PHN2Zw'));

      // 4. Background images
      const bgImages = [];
      document.querySelectorAll('*').forEach(el => {
        const bg = window.getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none' && bg.includes('url(')) {
          const match = bg.match(/url\(["']?([^"']+)["']?\)/);
          if (match && match[1] && !match[1].startsWith('data:')) {
            bgImages.push({
              url: match[1],
              tag: el.tagName.toLowerCase(),
              className: el.className
            });
          }
        }
      });

      // 5. Fonts
      const fonts = new Set();
      document.querySelectorAll('*').forEach((el, idx) => {
        if (idx < 500) {
          const cs = window.getComputedStyle(el);
          if (cs.fontFamily) fonts.add(cs.fontFamily);
        }
      });

      // 6. Colors
      const colors = new Set();
      const bgColors = new Set();
      document.querySelectorAll('*').forEach((el, idx) => {
        if (idx < 500) {
          const cs = window.getComputedStyle(el);
          if (cs.color) colors.add(cs.color);
          if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') {
            bgColors.add(cs.backgroundColor);
          }
        }
      });

      // 7. Navigation items
      const navLinks = [...document.querySelectorAll('header a, nav a')].map(a => ({
        text: a.textContent?.trim(),
        href: a.href
      })).filter(a => a.text);

      // 8. Structure / top level sections
      const sections = [];
      const mainElements = document.querySelectorAll('header, nav, main, footer, section, div[data-elementor-type="wp-page"] > div, article');
      mainElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.height > 50 && rect.width > 200) {
          sections.push({
            index,
            tag: el.tagName.toLowerCase(),
            id: el.id,
            className: typeof el.className === 'string' ? el.className.split(' ').slice(0, 5).join(' ') : '',
            rect: { top: rect.top + window.scrollY, left: rect.left, width: rect.width, height: rect.height },
            textPreview: el.innerText ? el.innerText.slice(0, 150).replace(/\s+/g, ' ') : ''
          });
        }
      });

      return {
        title,
        metas,
        favicons,
        images,
        bgImages,
        fonts: Array.from(fonts),
        colors: Array.from(colors),
        bgColors: Array.from(bgColors),
        navLinks,
        sections
      };
    });

    fs.writeFileSync(path.join(researchDir, 'audit.json'), JSON.stringify(globalData, null, 2));
    console.log('Saved audit.json successfully!');
    console.log(`Found ${globalData.images.length} images, ${globalData.bgImages.length} bg images, ${globalData.fonts.length} fonts.`);

  } catch (err) {
    console.error('Error during inspection:', err);
  } finally {
    await browser.close();
  }
}

main();
