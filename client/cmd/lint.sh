#!/bin/sh

npm run lint

if [ $? -eq 1 ]; then
  echo 'Lint failed. Commit stopped \n'
  exit 1
fi
