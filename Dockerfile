FROM node:12 as build

WORKDIR /

COPY package.json ./package.json

RUN npm install --silent
COPY . ./
RUN npm run build

FROM nginx:1.16.1
COPY --from=build ./build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
