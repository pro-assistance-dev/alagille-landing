package entrances

import (
	"context"
	"patro/modules/buildings/models"
)

func (s *Service) GetAll(c context.Context) (models.EntrancesWithCount, error) {
	return R.GetAll(c)
}
