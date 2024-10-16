# Stage 1: Build the TypeScript files
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY prisma ./prisma
COPY tsconfig.json ./
COPY src ./src

RUN yarn prisma generate
RUN yarn build

# Stage 2: Run the application
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/package.json /app/yarn.lock ./
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/dist ./dist

COPY .env ./
COPY prisma/dev.db /app/prisma/dev.db

RUN yarn install --production

ENV DATABASE_URL="file:/app/prisma/dev.db"
ENV PORT=3001

EXPOSE 3001

CMD ["yarn", "start"]