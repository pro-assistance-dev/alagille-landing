package buildings

import (
	"patro/modules/buildings/handlers/buildings"
	"patro/modules/buildings/handlers/entrances"
	"patro/modules/buildings/handlers/floors"

	buildingsRouter "patro/modules/buildings/routing/buildings"
	entrancesRouter "patro/modules/buildings/routing/entrances"
	floorsRouter "patro/modules/buildings/routing/floors"

	"github.com/gin-gonic/gin"
	helperPack "github.com/pro-assistance-dev/sprob/helper"
)

func InitRoutes(api *gin.RouterGroup, helper *helperPack.Helper) {
	buildings.Init(helper)
	buildingsRouter.Init(api.Group("/buildings"), buildings.H)

	entrances.Init(helper)
	entrancesRouter.Init(api.Group("/entrances"), entrances.H)

	floors.Init(helper)
	floorsRouter.Init(api.Group("/floors"), floors.H)
}
