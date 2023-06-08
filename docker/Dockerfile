FROM node:18.13.0-alpine as frontend

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

EXPOSE 3000

FROM nginx:1.16.0-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]