# tanomimaster-doc

- Tanomimaster's system document repository
- `gh-page` branch is published to:
  - https://tanomimaster.github.io/tanomimaster-doc
  - Deploy process is triggered when `gh-page` branch is pushed.

## Local preview

- This repository is build upon [Docusaurus](https://docusaurus.io/)
- root directory of the document is `webwsite`.

### Docker

```
docker-compose up
```

Then open [http://localhost:3000/tanomimaster-doc/](http://localhost:3000/tanomimaster-doc/) by browser.
- The base URL `/tanomimaster-doc/` is required to be identical with production base URL.


## Deploy

The contents in the `master` is published to https://tanomimaster.github.io/tanomimaster-doc/ automatically by building and pushing by Github Actions.

- See files in the `.github/workflows`.


