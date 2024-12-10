package routing

import (
	"alagille-landing/handlers/patients"
	patientsRouter "alagille-landing/routing/patients"

	"github.com/gin-gonic/gin"

	helperPack "github.com/pro-assistance-dev/sprob/helper"
	"github.com/pro-assistance-dev/sprob/middleware"
	baseRouter "github.com/pro-assistance-dev/sprob/routing"
)

func Init(r *gin.Engine, helper *helperPack.Helper) {
	m := middleware.CreateMiddleware(helper)
	api, _ := baseRouter.Init(r, helper)
	// api.Use(m.InjectClaims())
	api.Use(m.InjectFTSP())

	patients.Init(helper)
	patientsRouter.Init(api.Group("/patients"), patients.H)
}
