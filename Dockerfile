FROM node:15.11.0-alpine3.13 as build 
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:1.19.8-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD  ["nginx","-g","daemon off;"]