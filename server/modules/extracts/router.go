package extracts

import (
	"patro/modules/extracts/handlers/extracts"

	extractsRouter "patro/modules/extracts/routing/extracts"

	"github.com/gin-gonic/gin"
	helperPack "github.com/pro-assistance-dev/sprob/helper"
)

func InitRoutes(api *gin.RouterGroup, helper *helperPack.Helper) {
	extracts.Init(helper)
	extractsRouter.Init(api.Group("/extracts"), extracts.H)
}
