FROM node:20

WORKDIR /app/website

EXPOSE 3000

RUN npm upgrade -g npm
RUN yarn install

CMD ["yarn", "start"]
