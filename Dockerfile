FROM node:16

WORKDIR /app/website

EXPOSE 3000

RUN yarn install

CMD ["yarn", "start"]
