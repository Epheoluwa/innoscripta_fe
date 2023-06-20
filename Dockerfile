FROM node:18-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
# COPY yarn.lock .
RUN npm install --force

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

USER node

COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]