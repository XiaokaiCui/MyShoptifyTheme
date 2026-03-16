#!/bin/bash

# Shopify Theme Deployment Script
# Usage: ./deploy.sh [method]

set -e

METHOD="${1:-help}"

case $METHOD in
  github)
    echo "🚀 Pushing to GitHub..."
    git push origin main
    echo "✅ Pushed to GitHub successfully!"
    echo "📦 Download from: https://github.com/XiaokaiCui/MyShoptifyTheme/archive/refs/heads/main.zip"
    ;;
  
  zip)
    echo "📦 Creating ZIP archive..."
    cd ~/openclaw_project/MyShoptifyTheme
    zip -r MyShoptifyTheme.zip . -x "*.git*" "*.DS_Store"
    echo "✅ Created MyShoptifyTheme.zip"
    echo "📤 Upload to Shopify: Admin → Online Store → Themes → Add theme → Upload theme"
    ;;
  
  themekit)
    echo "🛠️ Deploying with Theme Kit..."
    if ! command -v theme &> /dev/null; then
      echo "❌ Theme Kit not installed. Install with:"
      echo "   brew tap shopify/shopify && brew install themekit"
      exit 1
    fi
    theme deploy
    ;;
  
  help|*)
    echo "Shopify Theme Deployment Options:"
    echo ""
    echo "1. GitHub Push:"
    echo "   ./deploy.sh github"
    echo "   → Pushes to GitHub repository"
    echo ""
    echo "2. Create ZIP:"
    echo "   ./deploy.sh zip"
    echo "   → Creates MyShoptifyTheme.zip for manual upload"
    echo ""
    echo "3. Theme Kit:"
    echo "   ./deploy.sh themekit"
    echo "   → Deploys directly using Theme Kit (requires configuration)"
    echo ""
    echo "Theme Structure:"
    echo "  - 21 files, 6,578 lines of code"
    echo "  - 11 Shopify sections"
    echo "  - 5 page templates"
    echo "  - Complete theme settings"
    echo ""
    echo "Quick Shopify Upload:"
    echo "  1. Download ZIP: ./deploy.sh zip"
    echo "  2. Go to Shopify Admin → Online Store → Themes"
    echo "  3. Click 'Add theme' → 'Upload theme'"
    echo "  4. Select MyShoptifyTheme.zip"
    echo "  5. Click 'Publish theme'"
    ;;
esac