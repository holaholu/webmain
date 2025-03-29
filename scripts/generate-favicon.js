const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicon() {
  const sizes = [16, 24, 32, 64];
  const svgBuffer = await fs.readFile(path.join(__dirname, '../public/logo.svg'));
  
  // Generate PNG for each size
  const pngBuffers = await Promise.all(
    sizes.map(size => 
      sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  // Write to favicon.ico
  await sharp(pngBuffers[sizes.length - 1])  // Use largest size as base
    .toFile(path.join(__dirname, '../public/favicon.ico'));
}

generateFavicon().catch(console.error);
