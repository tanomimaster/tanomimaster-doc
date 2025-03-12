# Tanomimaster Doc Project Guidelines

## Build & Preview Commands
- Preview site locally: `docker-compose up` (http://localhost:3000/tanomimaster-doc/)
- Alternative preview: `cd website && npm start`
- Build site: `cd website && npm run build`
- Deploy site: `cd website && npm run deploy`

## Linting
- Run textlint: `npx textlint website`
- Fix textlint issues: `npx textlint website --fix`

## Documentation Style
- Document root is in the `website` directory
- Use Docusaurus-compatible Markdown
- Follow Japanese spacing rules:
  - Always use space between half-width and full-width characters
  - No spaces between full-width characters
  - No spaces around parentheses in Japanese
  - Use nakaguro (・) or half-width space between katakana

## Project Structure
- Docs are in `website` directory
- Changes to `master` branch are automatically deployed by GitHub Actions
- Base URL must be `/tanomimaster-doc/` to match production environment