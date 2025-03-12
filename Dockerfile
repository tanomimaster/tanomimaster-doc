FROM node:22

WORKDIR /app/website

EXPOSE 3000

RUN corepack enable yarn
RUN yarn install

CMD ["yarn", "start"]
