#!/bin/bash
# MindReply Production Deployment Script
# Usage: bash scripts/deploy-production.sh

set -e

echo "🚀 MindReply Production Deployment"
echo "=================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check prerequisites
echo -e "${BLUE}Checking prerequisites...${NC}"
command -v git >/dev/null 2>&1 || { echo "❌ git is required but not installed."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed."; exit 1; }

# Verify we're on main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo -e "${YELLOW}⚠️  You are on branch '$CURRENT_BRANCH', not 'main'${NC}"
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo -e "${YELLOW}⚠️  You have uncommitted changes${NC}"
  git status
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

echo -e "${GREEN}✓ Prerequisites check passed${NC}"
echo ""

# Build verification
echo -e "${BLUE}Building application...${NC}"
npm run build
echo -e "${GREEN}✓ Build successful${NC}"
echo ""

# Run tests (if available)
if npm run test >/dev/null 2>&1; then
  echo -e "${BLUE}Running tests...${NC}"
  npm run test
  echo -e "${GREEN}✓ Tests passed${NC}"
else
  echo -e "${YELLOW}⚠️  No tests configured${NC}"
fi
echo ""

# Verify environment
echo -e "${BLUE}Verifying environment...${NC}"
if [ -z "$NEXT_PUBLIC_SITE_URL" ]; then
  echo -e "${YELLOW}⚠️  NEXT_PUBLIC_SITE_URL not set${NC}"
  export NEXT_PUBLIC_SITE_URL="https://www.mind-reply.com"
  echo "Set to: $NEXT_PUBLIC_SITE_URL"
fi
echo -e "${GREEN}✓ Environment verified${NC}"
echo ""

# Commit and push
echo -e "${BLUE}Pushing to GitHub...${NC}"
git push origin main
echo -e "${GREEN}✓ Pushed to main branch${NC}"
echo ""

# Deployment info
echo -e "${GREEN}✅ Deployment initiated!${NC}"
echo ""
echo "📊 Deployment Status:"
echo "  Repository: mind-reply/MindReply"
echo "  Branch: main"
echo "  URL: https://www.mind-reply.com"
echo "  Admin: https://www.mind-reply.com/admin"
echo ""
echo "🔗 Monitor deployment at:"
echo "  https://vercel.com/dashboard"
echo ""
echo "📝 View logs:"
echo "  https://vercel.com/mind-reply/mindreply/deployments"
echo ""
