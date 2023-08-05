# Three.js Journey

## Deploy to gh-pages
``` bash
# Build for production in the dist/ directory
npm run build

# dist directory contains minimized version of the source code
# and vite's default .gitignore ignores dist directory
# because we want to override that, we put -f option to the command
git add dist -f

# Commit the stage
git commit -m "commit message"

# Push the commit to the gh-pages
git subtree push --prefix dist origin gh-pages
```

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
