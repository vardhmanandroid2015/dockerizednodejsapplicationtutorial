FROM node:12

# Create nodejsapp directory
RUN mkdir nodejsapp

# Change directory
WORKDIR nodejsapp

# To copy all the required js files
COPY *.js ./

# Copying server.js
COPY package.json ./

# install the dependency
RUN npm install