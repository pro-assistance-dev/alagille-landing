#!/bin/sh

sh ./cmd/golangci.sh

if [ $? -gt 0 ]; then
  printf "Server lint failed\n"
  exit 1
else
  printf "Server lint succeeded\n"
fi
