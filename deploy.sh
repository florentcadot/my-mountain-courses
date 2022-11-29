#!/bin/bash
_remote=raspberry.local
_user=florent

git push origin -f main

# Install node_modules
yarn

# Build apps and libs
nx run-many --target=build

# Copy production build to remote server
scp -r dist $_user@$_remote:/home/florent/my-mountain-courses

# Connect to remote server build the images stop old container and start new ones
ssh -T $_remote <<'EOL'
  cd my-mountain-courses
  git pull origin main
  docker compose build --no-cache
  docker compose up -d --remove-orphans
  docker image prune -f
EOL

