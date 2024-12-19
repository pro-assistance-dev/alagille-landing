package models

import (
	"time"

	"github.com/uptrace/bun"

	"github.com/google/uuid"
	basemodels "github.com/pro-assistance-dev/sprob/models"
)

type Patient struct {
	bun.BaseModel     `bun:"patients,alias:patients"`
	ID                uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Name              string        `json:"name"`
	Surname           string        `json:"surname"`
	Patronymic        string        `json:"alagille-landingnymic"`
	DateBirth         *time.Time    `json:"dateBirth"`
	Email             string        `json:"email"`
	IsMale            bool          `json:"isMale"`
	Phone             string        `json:"phone"`
	FioRepresentative string        `json:"fioRepresentative"`
	HowDoYouKnow      string        `json:"howDoYouKnow"`
	EditNameMode      bool          `json:"editNameMode"`

	IsRussian bool   `json:"isRussian"`
	Region    string `json:"region"`
	Diagnosis string `json:"diagnosis"`
	Drug      string `json:"drug"`

	IllHistory   *basemodels.FileInfo `bun:"rel:belongs-to" json:"illHistory"`
	IllHistoryID uuid.NullUUID        `bun:"type:uuid"  json:"illHistoryId"`
	Accept       *basemodels.FileInfo `bun:"rel:belongs-to" json:"accept"`
	AcceptID     uuid.NullUUID        `bun:"type:uuid"  json:"acceptId"`
	// UserAccountID uuid.NullUUID           `bun:"type:uuid" json:"userAccountId"`
	// UserAccount   *baseModels.UserAccount `bun:"rel:belongs-to" json:"userAccount"`
}

type Patients []*Patient

type PatientsWithCount struct {
	Patients Patients `json:"items"`
	Count    int      `json:"count"`
}
