# Stage 1: Build the TypeScript files
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY tsconfig.json ./
COPY src ./src

RUN yarn install
RUN yarn build

# Stage 2: Run the application
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/dist ./dist

RUN yarn install --production

EXPOSE 4002

CMD ["yarn", "start"]