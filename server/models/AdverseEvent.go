package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
)

type AdverseEvent struct {
	bun.BaseModel    `bun:"adverse_events,alias:adverse_events"`
	ID               uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	EventDescription string        `json:"eventDescription"`
	CreatedAt        time.Time     `bun:",nullzero,notnull,default:current_timestamp" json:"createdAt"`

	ReportedCompany bool      `json:"reportedCompany"`
	ReportedDate    time.Time `bun:",nullzero,notnull,default:current_timestamp" json:"reportedDate"`
	ReportedPerson  string    `json:"reportedPerson"`
	ReportedPath    string    `json:"reportedPath"`

	Patient   *Patient      `bun:"rel:belongs-to" json:"patient"`
	PatientID uuid.NullUUID `bun:"type:uuid" json:"patientId"`
}

type AdverseEvents []*AdverseEvent

type AdverseEventsWithCount struct {
	AdverseEvents AdverseEvents `json:"items"`
	Count         int           `json:"count"`
}
