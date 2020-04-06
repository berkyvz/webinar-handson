FROM node:stretch-slim
RUN mkdir app
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start