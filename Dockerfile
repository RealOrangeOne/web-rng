FROM node:lts-slim as build

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm ci

COPY ./tsconfig.json ./
COPY ./src ./src

RUN npm run build

FROM theorangeone/website-server:latest

COPY --from=build --chown=1000 /app/public /srv
