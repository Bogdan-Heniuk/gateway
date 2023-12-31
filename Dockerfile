FROM node:16-alpine

WORKDIR '/gateway'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]