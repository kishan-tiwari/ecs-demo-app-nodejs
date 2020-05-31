FROM node:14.3.0-alpine3.10
WORKDIR /usr/share/app
COPY package.json .
RUN npm install 
COPY server.js .
EXPOSE 4001
CMD [ "npm", "start" ]
