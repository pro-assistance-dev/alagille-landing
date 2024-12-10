#!/bin/bash

GITHUB_API_REST="pro-assistance-dev/sprob"
ans=$(curl -s GET https://api.github.com/repositories/470916770/tags | jq -r '.[].name' | head -n1)
go get github.com/pro-assistance-dev/sprob@${ans}
