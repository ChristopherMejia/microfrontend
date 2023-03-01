FROM node:16.13.0-alpine

WORKDIR /app

COPY . .

RUN npm i -g http-server

RUN npm install

RUN npm build

EXPOSE 8083

CMD [ "http-server", "dist", "-p", "8083" ]

