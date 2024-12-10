package floors

import (
	"context"
	"patro/modules/buildings/models"
)

func (s *Service) GetAll(c context.Context) (models.FloorsWithCount, error) {
	return R.GetAll(c)
}
