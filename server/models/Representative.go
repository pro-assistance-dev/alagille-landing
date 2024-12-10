package models

import (
	"github.com/google/uuid"
	baseModels "github.com/pro-assistance-dev/sprob/models"
	"github.com/uptrace/bun"
)

type Representative struct {
	bun.BaseModel `bun:"representatives,select:representatives,alias:representatives"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Human         *Human        `bun:"rel:belongs-to" json:"human"`
	HumanID       uuid.NullUUID `bun:"type:uuid" json:"humanId"`

	AgreeScan   *baseModels.FileInfo `bun:"rel:belongs-to" json:"agreeScan"`
	AgreeScanID uuid.NullUUID        `bun:"type:uuid" json:"agreeScanId"`

	Email string `json:"email"`
	Phone string `json:"phone"`

	Inn                  string `json:"inn"`
	Snils                string `json:"snils"`
	PassportNum          string `json:"passportNum"`
	PassportSeria        string `json:"passportSeria"`
	PassportDivision     string `json:"passportDivision"`
	PassportDivisionCode string `json:"passportDivisionCode"`
	PassportCitzenship   string `json:"passportCitzenship"`
}

type Representatives []*Representative

type RepresentativesWithCount struct {
	Representatives Representatives `json:"items"`
	Count           int             `json:"count"`
}
