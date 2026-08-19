const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/images/herosection');
const desktopDir = path.join(srcDir, 'desktop');

if (!fs.existsSync(desktopDir)) {
  fs.mkdirSync(desktopDir, { recursive: true });
}

const TOTAL_FRAMES = 300;

async function processFrames() {
  console.log(`Processing ${TOTAL_FRAMES} desktop frames...`);
  const startTime = Date.now();

  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const padIndex = String(i).padStart(3, '0');
    const inputPath = path.join(srcDir, `ezgif-frame-${padIndex}.png`);

    if (!fs.existsSync(inputPath)) {
      console.error(`Source PNG missing: ${inputPath}`);
      continue;
    }

    const desktopPath = path.join(desktopDir, `ezgif-frame-${padIndex}.webp`);

    // Desktop: 1920x1080 WebP (cover fit)
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'cover' })
      .webp({ quality: 75, effort: 4 })
      .toFile(desktopPath);

    // Save poster image (Frame 1)
    if (i === 1) {
      const posterPath = path.join(desktopDir, 'ezgif-frame-001.webp');
      console.log(`Poster image frame ready: ${posterPath}`);
    }

    if (i % 50 === 0 || i === TOTAL_FRAMES) {
      console.log(`Processed ${i}/${TOTAL_FRAMES} frames...`);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`Successfully optimized all ${TOTAL_FRAMES} frames in ${duration}s!`);
}

processFrames().catch(err => {
  console.error('Error optimizing hero frames:', err);
  process.exit(1);
});
