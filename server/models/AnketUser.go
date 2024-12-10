package models

import (
	forms "patro/modules/forms/models"
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type AnketUser struct {
	bun.BaseModel `bun:"ankets_users,alias:ankets_users"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Num           string        `json:"num"`
	Anket         *Anket        `bun:"rel:belongs-to" json:"anket"`
	AnketID       uuid.NullUUID `bun:"type:uuid" json:"anketId"`
	User          *User         `bun:"rel:belongs-to" json:"user"`
	UserID        uuid.NullUUID `bun:"type:uuid" json:"userId"`

	FormFill   *forms.FormFill `bun:"rel:belongs-to" json:"formFill"`
	FormFillID uuid.NullUUID   `bun:"type:uuid" json:"formFillId"`

	CreatedAt time.Time `bun:",nullzero,notnull,default:current_timestamp" json:"createdAt"`
	Order     uint      `bun:"item_order" json:"order"`

	Finished   bool       `json:"finished"`
	Paid       bool       `json:"paid"`
	FinishedAt *time.Time `json:"finishedAt"`
}

type AnketsUsers []*AnketUser

type AnketsUsersWithCount struct {
	AnketsUsers AnketsUsers `json:"items"`
	Count       int         `json:"count"`
}
