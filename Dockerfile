FROM node:20
WORKDIR /app/frontend
COPY package*.json .
RUN npm ci
COPY . .
# EXPOSE 3000
CMD [ "npm", "run", "dev" ]