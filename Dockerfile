
FROM node:18

# Update OS packages to reduce vulnerabilities
WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y python3 make g++ \
    && npm install \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

# compile typescript
RUN npm run build 

EXPOSE 8000

CMD ["node", "dist/server.js"]
