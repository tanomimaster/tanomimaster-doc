# Tanomimaster Doc Project Guidelines

## Build & Preview Commands
- Preview site locally: `docker-compose up` (http://localhost:3000/tanomimaster-doc/)
- Alternative preview: `cd website && npm start --host=0.0.0.0`
- Build site: `cd website && npm run build`
- Deploy site: `cd website && npm run deploy`
- Generate translations: `cd website && npm run write-translations`

## Linting
- Run textlint: `npx textlint website`
- Fix textlint issues: `npx textlint website --fix`
- Check Markdown style: `npx markdownlint-cli2 "**/*.md"`

## Markdown Style Rules
- Use dash style for unordered lists (`- item`)
- Use fenced code blocks with backticks (```)
- Follow Japanese textlint rules:
  - Add space between half-width and full-width characters
  - No spaces between full-width characters
  - No spaces around Japanese parentheses (丸かっこ（）)
  - Keep sentences under 100 characters
  - Maintain consistent style (だ/である or です/ます) within documents
  - Maximum of 3 commas (、) per sentence

## Blog Posts
- Use template at `website/blog/.template.md` for release notes
- Include sections for retail, manufacturer, and system admin audiences
- Add GitHub comparison URL for code changes

## Project Structure
- Document root is in `website` directory
- Base URL must be `/tanomimaster-doc/` for production
- Changes to `master` branch are automatically deployed via GitHub Actions