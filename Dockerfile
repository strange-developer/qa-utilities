FROM node:alpine

WORKDIR /home/node/app

CMD ["npm", "test"]