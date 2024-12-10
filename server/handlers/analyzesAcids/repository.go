package analyzesAcids

import (
	"context"
	"patro/models"
)

func (r *Repository) GetAll(c context.Context) (item models.AnalyzesAcidsWithCount, err error) {
	item.AnalyzesAcids = make(models.AnalyzesAcids, 0)
	q := r.helper.DB.IDB(c).NewSelect().
		Model(&item.AnalyzesAcids).
		Relation("Patient")

	r.helper.SQL.ExtractFTSP(c).HandleQuery(q)
	item.Count, err = q.ScanAndCount(c)
	return item, err
}

func (r *Repository) Get(c context.Context, id string) (*models.AnalyzeAcids, error) {
	item := models.AnalyzeAcids{}
	err := r.helper.DB.IDB(c).NewSelect().Model(&item).
		Relation("Patient").
		Where("?TableAlias.id = ?", id).
		Scan(c)
	return &item, err
}

func (r *Repository) Delete(c context.Context, id string) (err error) {
	_, err = r.helper.DB.IDB(c).NewDelete().Model(&models.AnalyzeAcids{}).Where("id = ?", id).Exec(c)
	return err
}

func (r *Repository) Update(c context.Context, item *models.AnalyzeAcids) (err error) {
	_, err = r.helper.DB.IDB(c).NewUpdate().Model(item).Where("id = ?", item.ID).Exec(c)
	return err
}

func (r *Repository) Create(c context.Context, item *models.AnalyzeAcids) (err error) {
	_, err = r.helper.DB.IDB(c).NewInsert().Model(item).Exec(c)
	return err
}
