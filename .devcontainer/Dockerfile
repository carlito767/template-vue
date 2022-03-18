FROM node:16.14.0-buster

WORKDIR /workspace

# Instal pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm && \
  pnpm config set store-dir .pnpm-store

# Fetch packages from lockfile into virtual store, package manifest is ignored
COPY .npmrc pnpm-lock*.yaml ./
RUN pnpm fetch

# Copy project files and install dependencies from virtual store
COPY . ./
RUN pnpm install -r --offline
