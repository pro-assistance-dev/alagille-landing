#!/bin/bash

# STAGED_GO_FILES=$(git diff --cached --name-only | grep ".go$")
STAGED_GO_FILES=$(git diff --cached --name-status --diff-filter d -- '*.go' | awk '{ print $2 }')
#if [ -z "$STAGED_GO_FILES" ]; then
#  exit 0
#fi

GOLANGCI="${GOPATH}/bin/golangci-lint"
# GOLANGCI="/home/daniil/go/bin/golangci-lint"
opt="run --verbose -E gofmt -E goimports  -E asciicheck -E unparam  -E typecheck -E unconvert"

$GOLANGCI $opt ./...

