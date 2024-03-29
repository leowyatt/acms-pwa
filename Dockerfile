FROM node:alpine as app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 100000
