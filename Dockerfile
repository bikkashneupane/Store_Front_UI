# Step 1: Build Phase
FROM node:alpine3.20 AS build-phase
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm","run", "dev"]
