#!/bin/bash
# Script to set up GitHub repository and push code

echo "🚀 Setting up GitHub repository for Vercel deployment"
echo ""
echo "Step 1: Create a new repository on GitHub"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: personal-portfolio (or your preferred name)"
echo "   - Make it PUBLIC (required for free Vercel)"
echo "   - Don't initialize with README"
echo "   - Click 'Create repository'"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name: " REPO_NAME

echo ""
echo "Step 2: Adding remote and pushing..."
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git 2>/dev/null || git remote set-url origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git
git branch -M main
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'Add New...' → 'Project'"
echo "4. Select your repository: ${REPO_NAME}"
echo "5. Click 'Deploy'"
echo ""
echo "Your site will be live in 2-3 minutes! 🎉"
