package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type AnalyzeVitamins struct {
	bun.BaseModel `bun:"analyzes_vitamins,alias:analyzes_vitamins"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	D25oh         string        `json:"d25oh"`
	A             string        `json:"a"`
	E             string        `json:"e"`
	K1            string        `json:"k1"`
	ResultDate    time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"resultDate"`

	Patient   *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID uuid.NullUUID `bun:"type:uuid" json:"patientId"`
}

type AnalyzesVitamins []*AnalyzeVitamins

type AnalyzesVitaminsWithCount struct {
	AnalyzesVitamins AnalyzesVitamins `json:"items"`
	Count            int              `json:"count"`
}
