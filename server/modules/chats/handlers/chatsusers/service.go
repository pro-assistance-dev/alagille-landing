package chatsusers

import (
	"context"
	"patro/modules/chats/models"
)

func (s *Service) GetAll(c context.Context) (models.ChatsUsersWithCount, error) {
	return R.GetAll(c)
}
