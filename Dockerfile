FROM node:16.14


WORKDIR ./

COPY package.json yarn.lock ./

RUN yarn install --silent --progress=false

COPY . .

EXPOSE 3000

CMD ["yarn","start"]