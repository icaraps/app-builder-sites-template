const fs = require('fs');

const allFileContents = fs.readFileSync('.next/standalone/server.js', 'utf-8');
const lines = allFileContents.split(/\r?\n/);
for (const line of lines) {
  if (line.trim().startsWith('conf:')) {
    const conf = line.replace('conf:', '');
    
    const indexPath = 'dist/application/actions/pages-temp/index.js';
    const index = fs.readFileSync(indexPath).toString();
    fs.writeFileSync(indexPath, index.replace('NEXTJS_CONFIGURATION', conf.trim()));
    
    break;
  }
}
