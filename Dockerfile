FROM node:10.15-alpine
LABEL Maintainer Calvin Rodo <calvin.rodo@hrsdc-rhdcc.gc.ca>

WORKDIR /app

# Copy over and install the packages.
COPY package.json package-lock.json ./
RUN npm i

COPY . ./

EXPOSE 4000
CMD node index.js


