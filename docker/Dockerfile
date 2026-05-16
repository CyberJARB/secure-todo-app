FROM node:20-alpine

WORKDIR /app

COPY src/package*.json ./

RUN npm install --omit=dev

COPY src/ .

USER node

EXPOSE 3000

CMD ["npm", "start"]