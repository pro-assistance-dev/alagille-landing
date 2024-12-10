package patients

import (
	"alagille-landing/models"
	"context"

	"github.com/uptrace/bun"
)

func (r *Repository) GetAll(c context.Context) (item models.PatientsWithCount, err error) {
	item.Patients = make(models.Patients, 0)
	q := r.helper.DB.IDB(c).NewSelect().
		Model(&item.Patients).
		Relation("Human").
		Relation("Representative.Human")

	r.helper.SQL.ExtractFTSP(c).HandleQuery(q)
	item.Count, err = q.ScanAndCount(c)
	return item, err
}

func (r *Repository) Get(c context.Context, id string) (*models.Patient, error) {
	item := models.Patient{}
	err := r.helper.DB.IDB(c).NewSelect().Model(&item).
		Relation("Human").
		Relation("Representative.Human").
		Relation("Representative.AgreeScan").
		Relation("AgreeScan").
		Relation("AnalyzesAcids", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("analyzes_acids.result_date")
		}).
		Relation("AnalyzesVitamins", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("analyzes_vitamins.result_date")
		}).
		Relation("Therapies", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("therapies.appointment_date")
		}).
		Relation("ConsultationsLawyer", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("consultations_lawyer.theme_date")
		}).
		Relation("ConsultationsPsychologist", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("consultations_psychologist.theme_date")
		}).
		Relation("Applications", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("applications.created_at")
		}).
		Relation("Applications.FkScan").
		Relation("AdverseEvents", func(q *bun.SelectQuery) *bun.SelectQuery {
			return q.Order("adverse_events.created_at")
		}).
		Where("?TableAlias.id = ?", id).
		Scan(c)
	return &item, err
}

func (r *Repository) Delete(c context.Context, id string) (err error) {
	_, err = r.helper.DB.IDB(c).NewDelete().Model(&models.Patient{}).Where("id = ?", id).Exec(c)
	return err
}

func (r *Repository) Update(c context.Context, item *models.Patient) (err error) {
	_, err = r.helper.DB.IDB(c).NewUpdate().Model(item).Where("id = ?", item.ID).Exec(c)
	return err
}

func (r *Repository) Create(c context.Context, item *models.Patient) (err error) {
	_, err = r.helper.DB.IDB(c).NewInsert().Model(item).Exec(c)
	return err
}
