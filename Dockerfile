FROM node:12.22.6

WORKDIR /var/app

COPY .eslintrc .
COPY package-lock.json .
COPY package.json .

RUN npm install

COPY src ./src
COPY .babelrc .
