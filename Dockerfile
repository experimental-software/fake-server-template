FROM node:slim

WORKDIR /express-docker
COPY . .
RUN npm install && npx tsc

EXPOSE 7000
ENTRYPOINT ["node", "dist/index.js"]
