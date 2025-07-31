# Jekyll Local Development Setup Guide

This site uses Jekyll for static site generation. Here are multiple ways to get it running on your local computer.

## 🚀 Quick Start (Recommended)

### Option 1: Using Docker (Easiest - No Ruby Installation Required)

1. **Install Docker Desktop**
   - Download from: https://www.docker.com/products/docker-desktop
   - Install and start Docker

2. **Clone and Run**
   ```bash
   git clone https://github.com/dionyc/dionyc.github.io.git
   cd dionyc.github.io
   git checkout security-fixes-2025
   
   # Run Jekyll with Docker
   docker run --rm -it \
     --volume="$PWD:/srv/jekyll" \
     --publish 4000:4000 \
     jekyll/jekyll:4.2.2 \
     jekyll serve --host 0.0.0.0
   ```

3. **Visit**: http://localhost:4000

---

### Option 2: Native Ruby Installation

#### For macOS:
```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby
brew install ruby

# Add Ruby to PATH (add to ~/.zshrc or ~/.bash_profile)
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Install Jekyll
gem install jekyll bundler

# Clone and setup
git clone https://github.com/dionyc/dionyc.github.io.git
cd dionyc.github.io
git checkout security-fixes-2025
bundle install
npm install

# Run the site
npm start
# Visit: http://localhost:3000
```

#### For Windows:
```bash
# Install Ruby using RubyInstaller
# Download from: https://rubyinstaller.org/downloads/
# Choose Ruby 3.1.x with DevKit

# After installation, open Command Prompt and run:
gem install jekyll bundler

# Clone and setup
git clone https://github.com/dionyc/dionyc.github.io.git
cd dionyc.github.io
git checkout security-fixes-2025
bundle install
npm install

# Run the site
npm start
# Visit: http://localhost:3000
```

#### For Linux (Ubuntu/Debian):
```bash
# Install Ruby and dependencies
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# Add gems to PATH (add to ~/.bashrc)
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install Jekyll
gem install jekyll bundler

# Clone and setup
git clone https://github.com/dionyc/dionyc.github.io.git
cd dionyc.github.io
git checkout security-fixes-2025
bundle install
npm install

# Run the site
npm start
# Visit: http://localhost:3000
```

---

### Option 3: Using rbenv (Ruby Version Manager)

```bash
# Install rbenv
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash

# Add to shell profile (~/.bashrc, ~/.zshrc, etc.)
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

# Install Ruby 3.1.0
rbenv install 3.1.0
rbenv global 3.1.0

# Install Jekyll
gem install jekyll bundler

# Clone and setup
git clone https://github.com/dionyc/dionyc.github.io.git
cd dionyc.github.io
git checkout security-fixes-2025
bundle install
npm install

# Run the site
npm start
# Visit: http://localhost:3000
```

---

## 🛠️ Alternative: Static HTML Version

If Jekyll installation is problematic, I can create a static HTML version:

```bash
# Just run the Node.js build process
npm install
npm run build

# Serve static files
npx http-server _site -p 3000
# Visit: http://localhost:3000
```

---

## 🔧 Troubleshooting

### Common Issues:

1. **Ruby Permission Errors (macOS/Linux)**
   ```bash
   # Don't use sudo, install gems to user directory
   echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
   echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

2. **Bundle Install Fails**
   ```bash
   # Update bundler
   gem update bundler
   
   # Clear cache and reinstall
   bundle clean --force
   bundle install
   ```

3. **Node.js Issues**
   ```bash
   # Use Node Version Manager
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   nvm install 18
   nvm use 18
   npm install
   ```

4. **Port Already in Use**
   ```bash
   # Kill processes on port 3000
   lsof -ti:3000 | xargs kill -9
   
   # Or use different port
   bundle exec jekyll serve --port 4001
   ```

---

## 📋 What Should Work

After successful setup, you should see:
- ✅ Proper website layout (not Jekyll template code)
- ✅ "Hey!" header with waving hand emoji  
- ✅ Complete sections: Background, Skills, Experience, Projects
- ✅ Dark/light mode toggle
- ✅ Social links and footer
- ✅ All animations and styling

---

## 🆘 Still Having Issues?

If none of these work, let me know:
1. Your operating system (Windows/macOS/Linux)
2. Any error messages you see
3. Output of `ruby --version` and `node --version`

I can create a custom solution or Docker setup specifically for your system.