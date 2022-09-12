FROM node:carbon

WORKDIR /frontend/

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

RUN yarn build

CMD cp -rf build/ /frontend/upload \
    && chmod -R 777 /frontend/upload
