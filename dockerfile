FROM node:18-alpine

WORKDIR /user/healflow-FE/

COPY package.json .

RUN npm i 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
