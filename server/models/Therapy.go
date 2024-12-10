package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type Therapy struct {
	bun.BaseModel    `bun:"therapies,alias:therapies"`
	ID               uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Preparation      string        `json:"preparation"`
	Dosage           string        `json:"dosage"`
	AppointmentDate  time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"appointmentDate"`
	CancellationDate time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"cancellationDate"`
	Weight           float64       `json:"weight"`
	Remain           int           `json:"remain"`
	Patient          *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID        uuid.NullUUID `bun:"type:uuid" json:"patientId"`
}

type Therapies []*Therapy

type TherapiesWithCount struct {
	Therapies Therapies `json:"items"`
	Count     int       `json:"count"`
}
