package chats

import (
	"patro/modules/chats/handlers/chats"
	"patro/modules/chats/handlers/chatsmessages"
	"patro/modules/chats/handlers/chatsusers"

	chatsRouter "patro/modules/chats/routing/chats"
	chatsmessagesRouter "patro/modules/chats/routing/chatsmessages"
	chatsusersRouter "patro/modules/chats/routing/chatsusers"

	"github.com/gin-gonic/gin"
	helperPack "github.com/pro-assistance-dev/sprob/helper"
)

func InitRoutes(api *gin.RouterGroup, helper *helperPack.Helper) {
	chats.Init(helper)
	chatsRouter.Init(api.Group("/chats"), chats.H)

	chatsmessages.Init(helper)
	chatsmessagesRouter.Init(api.Group("/chatsmessages"), chatsmessages.H)

	chatsusers.Init(helper)
	chatsusersRouter.Init(api.Group("/chatsusers"), chatsusers.H)
}
