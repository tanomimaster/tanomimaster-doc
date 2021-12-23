# tanomimaster-doc

- `master` branch is published on
  - https://tanomimaster.github.io/tanomimaster-doc

## Local preview

- This repository is build upon [Docusaurus](https://docusaurus.io/)
- root directory of the document is `webwsite`.

### Docker

```
docker-compose up
```

Then open [http://localhost:3000/tanomimaster-doc/](http://localhost:3000/tanomimaster-doc/) by browser.
- The base URL `/tanomimaster-doc/` is required to be identical with production base URL.


### local

Run without docker.

```
cd website
yarn start
```

## Deploy

```
cd website
env GIT_USER=matsubo CURRENT_BRANCH=master USE_SSH=true yarn deploy
```

