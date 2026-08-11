const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/images/herosection');
const desktopDir = path.join(srcDir, 'desktop');
const mobileDir = path.join(srcDir, 'mobile');

if (!fs.existsSync(desktopDir)) {
  fs.mkdirSync(desktopDir, { recursive: true });
}
if (!fs.existsSync(mobileDir)) {
  fs.mkdirSync(mobileDir, { recursive: true });
}

const TOTAL_FRAMES = 240;

async function processFrames() {
  console.log(`Processing ${TOTAL_FRAMES} frames...`);
  const startTime = Date.now();

  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const padIndex = String(i).padStart(3, '0');
    const inputPath = path.join(srcDir, `ezgif-frame-${padIndex}.png`);

    if (!fs.existsSync(inputPath)) {
      console.error(`File missing: ${inputPath}`);
      continue;
    }

    const desktopPath = path.join(desktopDir, `frame-${padIndex}.webp`);
    const mobilePath = path.join(mobileDir, `frame-${padIndex}.webp`);

    // Desktop: 1280x720 WebP
    await sharp(inputPath)
      .resize(1280, 720, { fit: 'cover' })
      .webp({ quality: 70, effort: 4 })
      .toFile(desktopPath);

    // Mobile: 640x360 WebP
    await sharp(inputPath)
      .resize(640, 360, { fit: 'cover' })
      .webp({ quality: 65, effort: 4 })
      .toFile(mobilePath);

    // Save poster image (Frame 1)
    if (i === 1) {
      const posterPath = path.join(srcDir, 'hero-poster.webp');
      await sharp(inputPath)
        .resize(1280, 720, { fit: 'cover' })
        .webp({ quality: 75, effort: 4 })
        .toFile(posterPath);
      console.log(`Poster image created: ${posterPath}`);
    }

    if (i % 30 === 0 || i === TOTAL_FRAMES) {
      console.log(`Processed ${i}/${TOTAL_FRAMES} frames...`);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`Successfully converted all frames in ${duration}s!`);
}

processFrames().catch(err => {
  console.error('Error optimizing frames:', err);
  process.exit(1);
});
