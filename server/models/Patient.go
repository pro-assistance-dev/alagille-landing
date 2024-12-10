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

	Representative   *Representative `bun:"rel:belongs-to" json:"representative"`
	RepresentativeID uuid.NullUUID   `bun:"type:uuid" json:"representativeId"`

	AgreeScan   *baseModels.FileInfo `bun:"rel:belongs-to" json:"agreeScan"`
	AgreeScanID uuid.NullUUID        `bun:"type:uuid" json:"agreeScanId"`

	Email                string `json:"email"`
	Phone                string `json:"phone"`
	Status               string `json:"status"`
	Region               string `json:"region"`
	Comment              string `json:"comment"`
	Inn                  string `json:"inn"`
	Snils                string `json:"snils"`
	PassportNum          string `json:"passportNum"`
	PassportSeria        string `json:"passportSeria"`
	PassportDivision     string `json:"passportDivision"`
	PassportDivisionCode string `json:"passportDivisionCode"`
	PassportCitzenship   string `json:"passportCitzenship"`

	Disease     bool   `json:"disease"`
	DiseaseInfo string `json:"diseaseInfo"`

	AnalyzesAcids    AnalyzesAcids    `bun:"rel:has-many" json:"analyzesAcids"`
	AnalyzesVitamins AnalyzesVitamins `bun:"rel:has-many" json:"analyzesVitamins"`
	Therapies        Therapies        `bun:"rel:has-many" json:"therapies"`

	ConsultationsLawyer       ConsultationsLawyer       `bun:"rel:has-many" json:"consultationsLawyer"`
	ConsultationsPsychologist ConsultationsPsychologist `bun:"rel:has-many" json:"consultationsPsychologist"`
	Applications              Applications              `bun:"rel:has-many" json:"applications"`
	AdverseEvents             AdverseEvents             `bun:"rel:has-many" json:"adverseEvents"`
}

type Patients []*Patient

type PatientsWithCount struct {
	Patients Patients `json:"items"`
	Count    int      `json:"count"`
}
