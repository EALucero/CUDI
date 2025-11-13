FROM node:22-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn workspace frontend build

EXPOSE 5173

CMD ["yarn", "workspace", "frontend", "dev"]