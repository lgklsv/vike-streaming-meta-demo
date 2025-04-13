### Base
FROM node:20-alpine AS base
RUN npm install -g pnpm

ENV NODE_WORKDIR=/app

### Deps
FROM base AS deps
WORKDIR $NODE_WORKDIR

COPY package.json $NODE_WORKDIR/
RUN pnpm i

### Builder
FROM base AS builder
WORKDIR $NODE_WORKDIR
COPY --from=deps $NODE_WORKDIR/node_modules ./node_modules
COPY . .

RUN pnpm run build

### Runner
FROM base AS runner
WORKDIR $NODE_WORKDIR

COPY --from=builder $NODE_WORKDIR/ ./

CMD ["pnpm", "prod"]
