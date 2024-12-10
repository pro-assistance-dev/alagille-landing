#!/bin/sh

sh ./cmd/lint.sh

if [ $? -gt 0 ]; then
  echo 'Commit stopped \n'
  exit 1
fi

sh ./cmd/test.sh

if [ $? -gt 0 ]; then
  echo 'Commit stopped \n'
  exit 1
fi
