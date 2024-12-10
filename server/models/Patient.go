package models

import (
	"github.com/google/uuid"
	baseModels "github.com/pro-assistance-dev/sprob/models"
	"github.com/uptrace/bun"
)

type Patient struct {
	bun.BaseModel `bun:"patients,select:patients,alias:patients"`
	ID            uuid.NullUUID `bun:"id,pk,type:uuid,default:uuid_generate_v4()" json:"id" `
	Human         *Human        `bun:"rel:belongs-to" json:"human"`
	HumanID       uuid.NullUUID `bun:"type:uuid" json:"humanId"`

	AgreeScan   *baseModels.FileInfo `bun:"rel:belongs-to" json:"agreeScan"`
	AgreeScanID uuid.NullUUID        `bun:"type:uuid" json:"agreeScanId"`
}

type Patients []*Patient

type PatientsWithCount struct {
	Patients Patients `json:"items"`
	Count    int      `json:"count"`
}
