# tanomimaster-doc

- `master` branch is published on
  - https://minedia.github.io/tanomimaster-doc


https://minedia.github.io/tanomimaster-doc/

## Development

- This document is build upon [Docusaurus](https://docusaurus.io/)

### Docker

```
docker-compose up 
```

Open [http://localhost:3000/](http://localhost:3000/)


### local
```
cd website
```

and

hit `yarn start` or `npm start`

## Deploy

```
env GIT_USER=matsubo CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
```


