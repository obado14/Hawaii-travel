import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function makeTransparent(inputPath, outputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Extract raw RGBA
  const { data } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  // Flood fill from (0,0) and borders to remove outer white background
  // while preserving internal white (like the white sun and clouds)
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isWhite(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r > 240 && g > 240 && b > 240;
  }

  // Add all boundary pixels that are white to queue
  for (let x = 0; x < width; x++) {
    if (isWhite(x, 0)) {
      visited[0 * width + x] = 1;
      queue.push(x, 0);
    }
    if (isWhite(x, height - 1)) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    if (isWhite(0, y) && !visited[y * width + 0]) {
      visited[y * width + 0] = 1;
      queue.push(0, y);
    }
    if (isWhite(width - 1, y) && !visited[y * width + (width - 1)]) {
      visited[y * width + (width - 1)] = 1;
      queue.push(width - 1, y);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];

    const idx = (y * width + x) * 4;
    data[idx + 3] = 0; // Alpha = 0

    // Check 4 neighbors
    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const npos = ny * width + nx;
        if (!visited[npos] && isWhite(nx, ny)) {
          visited[npos] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Trim transparent edges and save
  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .trim()
  .png()
  .toFile(outputPath);

  console.log(`Saved transparent logo to ${outputPath}`);
}

async function main() {
  const orangeLogo = 'docs/research/cache_dumps/dump_f_0147f3.png';
  const blueLogo = 'docs/research/cache_dumps/dump_f_0147f2.png';

  // Output paths
  const navLogo = 'public/sites/gotourshawaii/root/gotours-logo.png';
  const footerLogo = 'public/sites/gotourshawaii/root/site-logo-white-e1714962363418.png';
  const mainLogo = 'public/logo.png';
  const faviconPng = 'public/sites/gotourshawaii/root/favicon.png';
  const faviconIco = 'public/favicon.ico';

  console.log('Processing Orange Logo for Navbar & Main...');
  await makeTransparent(orangeLogo, mainLogo);
  fs.copyFileSync(mainLogo, navLogo);

  console.log('Processing Logo for Footer...');
  fs.copyFileSync(mainLogo, footerLogo);

  // Generate favicon
  console.log('Generating Favicon...');
  await sharp(mainLogo)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(faviconPng);
  fs.copyFileSync(faviconPng, faviconIco);

  console.log('All logos updated successfully!');
}

main().catch(console.error);
