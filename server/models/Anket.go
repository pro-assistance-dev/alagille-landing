package models

import (
	"github.com/uptrace/bun"

	forms "patro/modules/forms/models"

	"github.com/google/uuid"
)

type Anket struct {
	bun.BaseModel `bun:"ankets,alias:ankets"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Name          string        `json:"name"`
	Form          *forms.Form   `bun:"rel:belongs-to" json:"form"`
	FormID        uuid.NullUUID `bun:"type:uuid" json:"formId"`
	Nosology      string        `json:"nosology"`
	Order         uint          `bun:"item_order" json:"order"`
}

type Ankets []*Anket

type AnketsWithCount struct {
	Ankets Ankets `json:"items"`
	Count  int    `json:"count"`
}
