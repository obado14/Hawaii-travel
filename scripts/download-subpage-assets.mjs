import fs from 'fs';
import path from 'path';

const assets = [
  {
    url: 'https://cdn-ilbjehj.nitrocdn.com/JKDUxvBhQYoRjXJVdgwijUeNHBiWkdYD/assets/images/optimized/rev-9d2064b/gotourshawaii.com/wp-content/uploads/2024/06/waikiki-scaled.jpeg',
    dest: 'public/sites/gotourshawaii/root/waikiki-scaled.jpeg'
  },
  {
    url: 'https://cdn-ilbjehj.nitrocdn.com/JKDUxvBhQYoRjXJVdgwijUeNHBiWkdYD/assets/images/optimized/rev-9d2064b/gotourshawaii.com/wp-content/uploads/2024/05/blog-hero-img.png',
    dest: 'public/sites/gotourshawaii/root/blog-hero-img.png'
  },
  {
    url: 'https://cdn-ilbjehj.nitrocdn.com/JKDUxvBhQYoRjXJVdgwijUeNHBiWkdYD/assets/images/source/rev-9d2064b/gotourshawaii.com/wp-content/uploads/2024/07/IMG_0478-company-branding-photoshoot.png',
    dest: 'public/sites/gotourshawaii/root/our-story-hero.png'
  },
  {
    url: 'https://cdn-ilbjehj.nitrocdn.com/JKDUxvBhQYoRjXJVdgwijUeNHBiWkdYD/assets/images/optimized/rev-9d2064b/gotourshawaii.com/wp-content/uploads/2024/05/contact-us-hero-img.png',
    dest: 'public/sites/gotourshawaii/root/contact-us-hero-img.png'
  },
  {
    url: 'https://cdn-ilbjehj.nitrocdn.com/JKDUxvBhQYoRjXJVdgwijUeNHBiWkdYD/assets/images/optimized/rev-9d2064b/gotourshawaii.com/wp-content/uploads/2024/07/image_2024-07-15_140633698-removebg-preview.png',
    dest: 'public/sites/gotourshawaii/root/subpage-divider.png'
  }
];

async function downloadAll() {
  for (const a of assets) {
    try {
      console.log(`Downloading ${a.url}...`);
      const res = await fetch(a.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${a.url}: ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(a.dest, Buffer.from(buffer));
      console.log(`Saved to ${a.dest} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${a.url}:`, e.message);
    }
  }
}

downloadAll();
