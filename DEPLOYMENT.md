# Deployment Instructions

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tria Contact List"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React and configure build settings
   - Click "Deploy"

3. **Your app will be live at**: `https://your-project-name.vercel.app`

## Alternative: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your GitHub repository

## Local Testing

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
