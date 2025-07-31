#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Simple Jekyll-like static site generator
class StaticGenerator {
  constructor() {
    this.config = this.loadConfig();
    this.includes = this.loadIncludes();
  }

  loadConfig() {
    try {
      const configContent = fs.readFileSync('_config.yml', 'utf8');
      return yaml.load(configContent);
    } catch (error) {
      console.error('Error loading _config.yml:', error.message);
      return {};
    }
  }

  loadIncludes() {
    const includes = {};
    const includesDir = '_includes';
    
    if (!fs.existsSync(includesDir)) return includes;
    
    const files = fs.readdirSync(includesDir);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const name = file.replace('.html', '');
        const content = fs.readFileSync(path.join(includesDir, file), 'utf8');
        includes[name] = content;
      }
    });
    
    return includes;
  }

  processTemplate(content) {
    // Replace site variables
    content = content.replace(/\{\{\s*site\.(\w+)\s*\}\}/g, (match, prop) => {
      return this.config[prop] || '';
    });

    // Process includes
    content = content.replace(/\{\%\s*include\s+(\w+)\.html\s*\%\}/g, (match, includeName) => {
      return this.includes[includeName] || '';
    });

    return content;
  }

  generateIndex() {
    try {
      // Read layout
      const defaultLayout = fs.readFileSync('_layouts/default.html', 'utf8');
      const indexContent = fs.readFileSync('index.html', 'utf8');
      
      // Extract front matter and content
      const frontMatterMatch = indexContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (!frontMatterMatch) {
        throw new Error('Invalid front matter in index.html');
      }
      
      const frontMatter = yaml.load(frontMatterMatch[1]);
      const content = frontMatterMatch[2];
      
      // Process the layout
      let html = this.processTemplate(defaultLayout);
      
      // Replace content placeholder
      html = html.replace(/\{\{\s*content\s*\}\}/, this.processTemplate(content));
      
      // Process any remaining includes in the layout
      html = this.processTemplate(html);
      
      // Ensure _site directory exists
      if (!fs.existsSync('_site')) {
        fs.mkdirSync('_site');
      }
      
      // Write the generated HTML
      fs.writeFileSync('_site/index.html', html);
      console.log('✅ Generated _site/index.html');
      
      // Copy other files
      this.copyStaticFiles();
      
    } catch (error) {
      console.error('❌ Error generating static site:', error.message);
      console.log('\n🔧 Falling back to manual HTML generation...');
      this.generateManualHTML();
    }
  }

  generateManualHTML() {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${this.config.title || 'Diony Concepcion | Front End Developer'}</title>
  <link rel="icon" type="image/png" href="${this.config.logo}" hreflang="en-us">
  <meta property="og:title" content="${this.config.title}" />
  <meta property="og:description" content="${this.config.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${this.config.url}" />
  <meta property="og:site_name" content="${this.config.name}" />
  <meta property="og:image" content="${this.config.cover}" />
  <meta name="description" content="${this.config.description}">
  <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet">
  <link rel="stylesheet" href="/css/main.css" hreflang="en-us">
</head>
<body>
  <div id="site">
    ${this.includes.switch || '<div class="switch-wrapper"><div class="sun"></div><div class="toggle-wrapper"><input id="switch" type="checkbox" /><label for="switch" id="toggle">Toggle</label></div><div class="moon"></div></div>'}
    ${this.includes.intro || '<header class="intro"><h1 class="intro__hello">Hey! <span class="emoji wave-hand animated"></span></h1><h2 class="intro__tagline">I\'m <span class="name">Diony Concepcion</span>, a design-minded front-end software engineer focused on building beautiful interfaces & experiences</h2></header>'}
    ${this.includes.background || ''}
    ${this.includes.skills || ''}
    ${this.includes.experience || ''}
    ${this.includes['featured-projects'] || ''}
    ${this.includes['other-projects'] || ''}
    ${this.includes.footer || '<footer class="footer"><div class="footer__copyright"><div class="bottom"><span>Diony Concepcion</span><span>2024</span></div></div></footer>'}
    ${this.includes['top-button'] || '<button id="top-button"><img src="/img/emojis/pointing-up.png" alt=""></button>'}
  </div>
  
  <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="/js/main.min.js"></script>
</body>
</html>`;

    fs.writeFileSync('_site/index.html', html);
    console.log('✅ Generated manual HTML fallback');
  }

  copyStaticFiles() {
    const filesToCopy = ['404.html', 'robots.txt', 'sitemap.xml'];
    filesToCopy.forEach(file => {
      if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('_site', file));
      }
    });
  }
}

// Run the generator
console.log('🚀 Generating static HTML...');
const generator = new StaticGenerator();
generator.generateIndex();
console.log('✅ Static site generation complete!');
console.log('📂 Files generated in _site/ directory');
console.log('🌐 You can now serve the _site directory with any web server');