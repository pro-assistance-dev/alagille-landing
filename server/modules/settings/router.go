package settings

import (
	"patro/modules/settings/handlers/colorthemes"

	colorthemesRouter "patro/modules/settings/routing/colorthemes"

	"github.com/gin-gonic/gin"
	helperPack "github.com/pro-assistance-dev/sprob/helper"
)

func InitRoutes(api *gin.RouterGroup, helper *helperPack.Helper) {
	colorthemes.Init(helper)
	colorthemesRouter.Init(api.Group("/color-themes"), colorthemes.H)
}
