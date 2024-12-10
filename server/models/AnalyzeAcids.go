package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type AnalyzeAcids struct {
	bun.BaseModel `bun:"analyzes_acids,alias:analyzes_acids"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Result        string        `json:"result"`
	ResultDate    time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"resultDate"`

	Patient   *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID uuid.NullUUID `bun:"type:uuid" json:"patientId"`
}

type AnalyzesAcids []*AnalyzeAcids

type AnalyzesAcidsWithCount struct {
	AnalyzesAcids AnalyzesAcids `json:"items"`
	Count         int           `json:"count"`
}
