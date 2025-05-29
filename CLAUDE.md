# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Docusaurus-based documentation site for Tanomimaster (B2B order management platform). The site is published to GitHub Pages and contains system documentation, API specifications, and release notes in Japanese.

## Development Commands

### Local Development
```bash
# Docker-based development (recommended)
docker-compose up
# Access at http://localhost:3000/tanomimaster-doc/

# Alternative: Direct npm start
cd website && npm start --host=0.0.0.0
```

### Build & Deploy
```bash
# Build the site
cd website && npm run build

# Deploy to GitHub Pages
cd website && npm run deploy

# Generate i18n translations
cd website && npm run write-translations
```

### Linting & Quality
```bash
# Check Japanese text with textlint
npx textlint website
npx textlint website --fix

# Check Markdown formatting
npx markdownlint-cli2 "**/*.md"
```

## Architecture & Structure

### Key Directories
- `website/`: Docusaurus application root
- `website/docs/`: Main documentation content
- `website/blog/`: Release notes and changelog entries
- `website/src/`: React components and styling
- `release-notes-generator/`: TypeScript tool for generating release notes

### Configuration
- `website/docusaurus.config.js`: Main Docusaurus configuration
- `textlintrc.json`: Japanese text linting rules
- Base URL is `/tanomimaster-doc/` for GitHub Pages deployment

### Content Guidelines
- Primary language: Japanese
- Blog posts should include sections for retail, manufacturer, and system admin users
- Include GitHub comparison URLs in release notes
- Follow Japanese textlint rules (spacing, parentheses, sentence length)
- Use dash-style lists and fenced code blocks

### Deployment
- `master` branch auto-deploys to https://tanomimaster.github.io/tanomimaster-doc/
- GitHub Actions handles build and deployment process