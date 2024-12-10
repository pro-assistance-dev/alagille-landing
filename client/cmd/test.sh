#!/bin/sh

npm run test
if [ $? -eq 1 ]; then
  echo 'Tests failed \n'
  exit 1
fi
