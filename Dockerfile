# Site Build
FROM node:lts-alpine as build

ENV NODE_ENV production

WORKDIR /app

COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json
COPY ./src /app/src

RUN npm ci --production

RUN npm run build

# Production run
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/ /usr/share/nginx/html
