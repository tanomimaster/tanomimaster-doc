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

Then open [http://localhost:3000/](http://localhost:3000/) by browser.


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

