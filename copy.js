const fs = require('fs');
console.log('Copying file...');
try {
  fs.copyFileSync('C:/Users/Asus/.gemini/antigravity/brain/419b5ce7-ca45-4cc2-8512-93e52787d7b8/favicon_rl_1773516944112.png', 'd:/laragon/www/project-undangan/project2/src/app/icon.png');
  fs.copyFileSync('C:/Users/Asus/.gemini/antigravity/brain/419b5ce7-ca45-4cc2-8512-93e52787d7b8/favicon_rl_1773516944112.png', 'd:/laragon/www/project-undangan/project2/public/favicon.png');
  if (fs.existsSync('d:/laragon/www/project-undangan/project2/src/app/favicon.ico')) {
    fs.unlinkSync('d:/laragon/www/project-undangan/project2/src/app/favicon.ico');
  }
  console.log('Files copied successfully.');
} catch (error) {
  console.error('Error copying file:', error);
}
