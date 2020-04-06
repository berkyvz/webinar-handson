FROM node:13.12.0-stretch
RUN mkdir app
WORKDIR app
COPY . .
RUN apt-get update
RUN apt-get install -y curl
RUN npm install
RUN npm run build
EXPOSE 5000
ENTRYPOINT node server.js


