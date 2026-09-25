import fs from 'fs';
import path from 'path';

const cacheDir = 'C:\\Users\\USer\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache\\Cache_Data';

if (fs.existsSync(cacheDir)) {
  const files = fs.readdirSync(cacheDir)
    .filter(f => f.startsWith('f_'))
    .map(f => {
      const full = path.join(cacheDir, f);
      try {
        const stat = fs.statSync(full);
        return { file: f, path: full, size: stat.size, time: stat.mtimeMs };
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => b.time - a.time)
    .slice(0, 50);

  fs.mkdirSync('docs/research/cache_dumps', { recursive: true });

  let count = 0;
  for (const item of files) {
    try {
      const buf = Buffer.alloc(16);
      const fd = fs.openSync(item.path, 'r');
      fs.readSync(fd, buf, 0, 16, 0);
      fs.closeSync(fd);

      const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
      const isJpg = buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
      const isWebp = buf.toString('utf8', 8, 12) === 'WEBP';

      if (isPng || isJpg || isWebp) {
        const ext = isPng ? '.png' : isJpg ? '.jpg' : '.webp';
        const dumpPath = path.join('docs/research/cache_dumps', `dump_${item.file}${ext}`);
        fs.copyFileSync(item.path, dumpPath);
        console.log(`Saved ${dumpPath} (size: ${item.size} bytes, time: ${new Date(item.time).toLocaleTimeString()})`);
        count++;
        if (count >= 10) break;
      }
    } catch (e) {
      // ignore locked file
    }
  }
} else {
  console.log('Cache dir does not exist');
}
