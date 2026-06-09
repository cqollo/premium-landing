const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configure clean, absolute path targets
const INPUT_DIR = path.join(__dirname, 'public', 'raw-images');
const OUTPUT_DIR = path.join(__dirname, 'public', 'projects');

// Guard clause: Ensure directories exist before running file system operations
if (!fs.existsSync(INPUT_DIR)) {
  fs.mkdirSync(INPUT_DIR, { recursive: true });
}
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('--- Initiating High-Performance Asset Optimization Pipeline ---');

// Read all files inside the raw staging area
fs.readdir(INPUT_DIR, (err, files) => {
  if (err) {
    console.error('Failed to read staging directory:', err);
    return;
  }

  // Filter out system files like .DS_Store and target only raw imagery
  const targetFiles = files.filter(file => 
    /\.(jpg|jpeg|png|tiff|webp)$/i.test(file)
  );

  if (targetFiles.length === 0) {
    console.log('No raw assets found in public/raw-images/. Staging environment clear.');
    return;
  }

  targetFiles.forEach(file => {
    const inputFilePath = path.join(INPUT_DIR, file);
    const parsedPath = path.parse(file);
    // Force lowercase extension extension for deterministic builds
    const outputFilePath = path.join(OUTPUT_DIR, `${parsedPath.name}.webp`);

    sharp(inputFilePath)
      // 1. Force modern Next.js friendly dimensions if assets are excessively large
      .resize({ width: 1400, withoutEnlargement: true }) 
      // 2. Set quality encoding matrix to 82% (Premium sweet-spot for weight vs crispness)
      .webp({ quality: 82, effort: 6 }) 
      .toFile(outputFilePath)
      .then(info => {
        const originalSize = (fs.statSync(inputFilePath).size / 1024).toFixed(1);
        const optimizedSize = (info.size / 1024).toFixed(1);
        const reduction = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(0);

        console.log(`✓ Processed: ${file} [${originalSize}KB → ${optimizedSize}KB] Saved ${reduction}%`);
      })
      .catch(processError => {
        console.error(`✕ Execution fault processing ${file}:`, processError.message);
      });
  });
});