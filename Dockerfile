FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS release
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/build ./build
COPY package.json ./

USER bun
EXPOSE 3000/tcp
CMD ["bun", "run", "start"]