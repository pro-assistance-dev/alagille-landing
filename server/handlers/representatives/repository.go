package representatives

import (
	"context"
	"patro/models"
)

func (r *Repository) GetAll(c context.Context) (item models.RepresentativesWithCount, err error) {
	item.Representatives = make(models.Representatives, 0)
	q := r.helper.DB.IDB(c).NewSelect().
		Model(&item.Representatives).
		Relation("Human").
		Relation("Patient.Human")

	r.helper.SQL.ExtractFTSP(c).HandleQuery(q)
	item.Count, err = q.ScanAndCount(c)
	return item, err
}

func (r *Repository) Get(c context.Context, id string) (*models.Representative, error) {
	item := models.Representative{}
	err := r.helper.DB.IDB(c).NewSelect().Model(&item).
		Relation("Human").
		Relation("Patient.Human").
		Relation("AgreeScan").
		Where("?TableAlias.id = ?", id).
		Scan(c)
	return &item, err
}

func (r *Repository) Delete(c context.Context, id string) (err error) {
	_, err = r.helper.DB.IDB(c).NewDelete().Model(&models.Anket{}).Where("id = ?", id).Exec(c)
	return err
}

func (r *Repository) Update(c context.Context, item *models.Representative) (err error) {
	_, err = r.helper.DB.IDB(c).NewUpdate().Model(item).Where("id = ?", item.ID).Exec(c)
	return err
}

func (r *Repository) Create(c context.Context, item *models.Representative) (err error) {
	_, err = r.helper.DB.IDB(c).NewInsert().Model(item).Exec(c)
	return err
}
