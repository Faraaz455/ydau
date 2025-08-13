import * as fs from 'fs';
import * as path from 'path';

const createPlaceholderIcon = () => {
  // Create a simple SVG icon
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="50" fill="url(#gradient)"/>
  <text x="128" y="140" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="white">YDAU</text>
</svg>`;

  // Create assets directory if it doesn't exist
  const assetsDir = path.join(__dirname, '../assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Save SVG file
  fs.writeFileSync(path.join(assetsDir, 'icon.svg'), svg);
  
  // Create a simple PNG placeholder (base64 encoded 1x1 transparent pixel)
  const pngData = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
  fs.writeFileSync(path.join(assetsDir, 'icon.png'), pngData);
  
  // Create a simple ICO file header (basic 16x16 pixel)
  const icoHeader = Buffer.from([
    0x00, 0x00, // Reserved
    0x01, 0x00, // Image type (1 = icon)
    0x01, 0x00, // Number of images
    // Image directory entry
    0x10, // Width (16)
    0x10, // Height (16)
    0x00, // Color count (0 = no palette)
    0x00, // Reserved
    0x01, 0x00, // Color planes
    0x20, 0x00, // Bits per pixel (32)
    0x16, 0x00, 0x00, 0x00, // Size in bytes
    0x16, 0x00, 0x00, 0x00  // Offset
  ]);
  
  // Simple 16x16 YDAU icon data (minimal bitmap)
  const icoData = Buffer.concat([icoHeader, pngData]);
  fs.writeFileSync(path.join(assetsDir, 'icon.ico'), icoData);
  
  console.log('Icon files created successfully!');
};

createPlaceholderIcon();