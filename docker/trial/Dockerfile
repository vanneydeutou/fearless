FROM --platform=arm64 node:14.17

WORKDIR /app

COPY package.json .
COPY package-lock.json .
# COPY angular.json .
COPY tsconfig.base.json .

RUN npm install

# Start the app and service it to localhost:4200
EXPOSE 4200
CMD ["npm", "run", "start"]
