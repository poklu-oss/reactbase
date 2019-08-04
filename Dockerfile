FROM node:latest as react-build

# Create app directory
WORKDIR /app
RUN mkdir dist
COPY . ./
RUN npm rebuild node-sass
RUN  npm install

RUN  npm run-script build


# stage: 2 — the production environment
FROM nginx:alpine
COPY --from=react-build /app/dist /usr/share/nginx/html

# To provide a http authentication comment out the next two lines
#COPY conf/default.conf /etc/nginx/conf.d/default.conf
#COPY conf/authnginx/htpasswd /etc/nginx/authnginx/htpasswd
EXPOSE 80 2222
CMD ["nginx", "-g", "daemon off;"]