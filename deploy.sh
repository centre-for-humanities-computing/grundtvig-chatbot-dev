#!/bin/bash
# requires local ssh key connected to github.com account

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:centre-for-humanities-computing/grundtvig-chatbot-app.git master:gh-pages

cd -
