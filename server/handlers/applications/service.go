package applications

import (
	"context"
	"patro/models"
)

func (s *Service) Create(c context.Context, item *models.Application) error {
	err := R.Create(c, item)
	if err != nil {
		return err
	}
	return err
}

func (s *Service) GetAll(c context.Context) (models.ApplicationsWithCount, error) {
	return R.GetAll(c)
}

func (s *Service) Get(c context.Context, id string) (*models.Application, error) {
	return R.Get(c, id)
}

func (s *Service) Update(c context.Context, item *models.Application) error {
	err := R.Update(c, item)
	if err != nil {
		return err
	}
	return nil
}

func (s *Service) Delete(c context.Context, id string) error {
	return R.Delete(c, id)
}
