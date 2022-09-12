FROM node:carbon

RUN mkdir -p /frontend

WORKDIR /frontend

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

CMD yarn start:dev
