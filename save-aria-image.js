#!/usr/bin/env node

/**
 * Helper script to save ARIA avatar image
 * 
 * Usage:
 * 1. If you have the image file locally:
 *    node save-aria-image.js /path/to/your/image.png
 * 
 * 2. If you have a URL:
 *    node save-aria-image.js https://example.com/aria.png
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const targetPath = path.join(__dirname, 'src', 'assets', 'aria-avatar.png');
const sourceArg = process.argv[2];

if (!sourceArg) {
  console.log(`
📸 ARIA Avatar Setup
====================

Please provide an image source:

1. Local file:
   node save-aria-image.js /path/to/image.png

2. Web URL:
   node save-aria-image.js https://example.com/image.png

Target location: ${targetPath}
  `);
  process.exit(0);
}

// Ensure assets directory exists
const assetsDir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Check if source is a URL
if (sourceArg.startsWith('http://') || sourceArg.startsWith('https://')) {
  console.log('📥 Downloading image from URL...');
  
  const protocol = sourceArg.startsWith('https') ? https : http;
  
  const file = fs.createWriteStream(targetPath);
  
  protocol.get(sourceArg, (response) => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log('✅ Image saved successfully to:', targetPath);
      console.log('\n🎉 ARIA avatar is ready! The development server will reload automatically.');
      updateImport();
    });
  }).on('error', (err) => {
    fs.unlink(targetPath, () => {}); // Delete incomplete file
    console.error('❌ Error downloading image:', err.message);
  });
} else {
  // Local file copy
  if (!fs.existsSync(sourceArg)) {
    console.error('❌ File not found:', sourceArg);
    process.exit(1);
  }
  
  console.log('📋 Copying local file...');
  
  try {
    fs.copyFileSync(sourceArg, targetPath);
    console.log('✅ Image saved successfully to:', targetPath);
    console.log('\n🎉 ARIA avatar is ready! The development server will reload automatically.');
    updateImport();
  } catch (err) {
    console.error('❌ Error copying file:', err.message);
  }
}

// Update the import statement in ARIAAvatar.jsx
function updateImport() {
  const componentPath = path.join(__dirname, 'src', 'components', 'ARIAAvatar.jsx');
  
  try {
    let content = fs.readFileSync(componentPath, 'utf-8');
    
    // Uncomment the import and remove the placeholder
    content = content.replace(
      '// import ariaAvatarUrl from \'../assets/aria-avatar.png\'\nconst ariaAvatarUrl = null // Remove this line after uncommenting import above',
      'import ariaAvatarUrl from \'../assets/aria-avatar.png\''
    );
    
    fs.writeFileSync(componentPath, content);
    console.log('✅ Updated ARIAAvatar.jsx to use the new image');
  } catch (err) {
    console.log('⚠️  Please manually uncomment the import in src/components/ARIAAvatar.jsx');
  }
}
