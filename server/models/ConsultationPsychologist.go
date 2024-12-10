package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type ConsultationPsychologist struct {
	bun.BaseModel `bun:"consultations_psychologist,alias:consultations_psychologist"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Theme         string        `json:"theme"`
	ThemeDate     time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"themeDate"`

	Patient   *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID uuid.NullUUID `bun:"type:uuid" json:"patientId"`
}

type ConsultationsPsychologist []*ConsultationPsychologist

type ConsultationsPsychologistWithCount struct {
	ConsultationsPsychologist ConsultationsPsychologist `json:"items"`
	Count                     int                       `json:"count"`
}
