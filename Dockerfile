###############################################################################

FROM node:16-bullseye as app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY ./src ./src
ENV NODE_ENV="development"
CMD yarn nodemon
