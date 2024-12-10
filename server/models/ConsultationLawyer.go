package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type ConsultationLawyer struct {
	bun.BaseModel `bun:"consultations_lawyer,alias:consultations_lawyer"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Theme         string        `json:"theme"`
	ThemeDate     time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"themeDate"`

	Patient   *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID uuid.NullUUID `bun:"type:uuid" json:"patientId"`
}

type ConsultationsLawyer []*ConsultationLawyer

type ConsultationsLawyerWithCount struct {
	ConsultationsLawyer ConsultationsLawyer `json:"items"`
	Count               int                 `json:"count"`
}
