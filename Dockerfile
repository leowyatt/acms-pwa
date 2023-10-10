###############################################################################

FROM node:16-bullseye as node
FROM node as app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY ./src ./src

FROM app as pwa
ENV NODE_ENV="development"
CMD yarn nodemon --exec "yarn develop --host"
