package chatsmessages

import (
	"context"
	"patro/modules/chats/models"
)

func (s *Service) GetAll(c context.Context) (models.ChatMessagesWithCount, error) {
	return R.GetAll(c)
}
