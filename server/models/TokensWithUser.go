package models

import (
	"github.com/pro-assistance-dev/sprob/helpers/token"
)

type TokensWithUser struct {
	Tokens *token.Details `json:"tokens"`
	User   User           `json:"user"`
}

func (i *TokensWithUser) Init(tokens *token.Details, user User) {
	i.Tokens = tokens
	i.User = user
}
