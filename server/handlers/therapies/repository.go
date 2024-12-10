package therapies

import (
	"context"
	"patro/models"
)

func (r *Repository) GetAll(c context.Context) (item models.TherapiesWithCount, err error) {
	item.Therapies = make(models.Therapies, 0)
	q := r.helper.DB.IDB(c).NewSelect().
		Model(&item.Therapies).
		Relation("Patient")

	r.helper.SQL.ExtractFTSP(c).HandleQuery(q)
	item.Count, err = q.ScanAndCount(c)
	return item, err
}

func (r *Repository) Get(c context.Context, id string) (*models.Therapy, error) {
	item := models.Therapy{}
	err := r.helper.DB.IDB(c).NewSelect().Model(&item).
		Relation("Patient").
		Where("?TableAlias.id = ?", id).
		Scan(c)
	return &item, err
}

func (r *Repository) Delete(c context.Context, id string) (err error) {
	_, err = r.helper.DB.IDB(c).NewDelete().Model(&models.Therapy{}).Where("id = ?", id).Exec(c)
	return err
}

func (r *Repository) Update(c context.Context, item *models.Therapy) (err error) {
	_, err = r.helper.DB.IDB(c).NewUpdate().Model(item).Where("id = ?", item.ID).Exec(c)
	return err
}

func (r *Repository) Create(c context.Context, item *models.Therapy) (err error) {
	_, err = r.helper.DB.IDB(c).NewInsert().Model(item).Exec(c)
	return err
}
