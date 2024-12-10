package models

import (
	"time"

	baseModels "github.com/pro-assistance-dev/sprob/models"
	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type Application struct {
	bun.BaseModel `bun:"applications,alias:applications"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Quantity      string        `json:"quantity"`
	CreatedAt     time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"createdAt"`

	FkScan   *baseModels.FileInfo `bun:"rel:belongs-to" json:"fkScan"`
	FkScanID uuid.NullUUID        `bun:"type:uuid" json:"fkScanId"`

	Patient   *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID uuid.NullUUID `bun:"type:uuid" json:"patientId"`

	Date  time.Time `bun:"item_date" json:"date"`
	Start time.Time `bun:"item_start" json:"start"`
	End   time.Time `bun:"item_end" json:"end"`
}

type Applications []*Application

type ApplicationsWithCount struct {
	Applications Applications `json:"items"`
	Count        int          `json:"count"`
}
