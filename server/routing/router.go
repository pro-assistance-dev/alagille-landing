package routing

import (
	"patro/handlers/adverseEvents"
	analyzesAcids "patro/handlers/analyzesAcids"
	analyzesVitamins "patro/handlers/analyzesVitamins"
	"patro/handlers/applications"
	"patro/handlers/auth"
	"patro/handlers/consultationsLawyer"
	"patro/handlers/consultationsPsychologist"
	"patro/handlers/humans"
	"patro/handlers/patients"
	"patro/handlers/representatives"
	"patro/handlers/therapies"
	"patro/handlers/users"
	"patro/modules/buildings"
	"patro/modules/chats"
	"patro/modules/extracts"
	"patro/modules/forms"
	"patro/modules/settings"
	authRouter "patro/routing/auth"
	patientsRouter "patro/routing/patients"
	representativesRouter "patro/routing/representatives"

	humansRouter "patro/routing/humans"
	therapiesRouter "patro/routing/therapies"

	analyzesAcidsRouter "patro/routing/analyzesAcids"
	analyzesVitaminsRouter "patro/routing/analyzesVitamins"
	usersRouter "patro/routing/users"

	adverseEventsRouter "patro/routing/adverseEvents"
	applicationsRouter "patro/routing/applications"
	consultationsLawyerRouter "patro/routing/consultationsLawyer"
	consultationsPsychologistRouter "patro/routing/consultationsPsychologist"

	"github.com/gin-gonic/gin"

	helperPack "github.com/pro-assistance-dev/sprob/helper"
	"github.com/pro-assistance-dev/sprob/middleware"
	baseRouter "github.com/pro-assistance-dev/sprob/routing"
)

func Init(r *gin.Engine, helper *helperPack.Helper) {
	m := middleware.CreateMiddleware(helper)
	api, apiNoToken := baseRouter.Init(r, helper)
	// api.Use(m.InjectClaims())
	api.Use(m.InjectFTSP())

	auth.Init(helper)
	authRouter.Init(apiNoToken.Group("/auth"), auth.H)

	users.Init(helper)
	usersRouter.Init(api.Group("/users"), users.H)

	humans.Init(helper)
	humansRouter.Init(api.Group("/humans"), humans.H)

	patients.Init(helper)
	patientsRouter.Init(api.Group("/patients"), patients.H)

	representatives.Init(helper)
	representativesRouter.Init(api.Group("/representatives"), representatives.H)

	therapies.Init(helper)
	therapiesRouter.Init(api.Group("/therapies"), therapies.H)

	analyzesAcids.Init(helper)
	analyzesAcidsRouter.Init(api.Group("/analyzes-acids"), analyzesAcids.H)

	analyzesVitamins.Init(helper)
	analyzesVitaminsRouter.Init(api.Group("/analyzes-vitamins"), analyzesVitamins.H)

	adverseEvents.Init(helper)
	adverseEventsRouter.Init(api.Group("/adverse-events"), adverseEvents.H)

	applications.Init(helper)
	applicationsRouter.Init(api.Group("/applications"), applications.H)

	consultationsLawyer.Init(helper)
	consultationsLawyerRouter.Init(api.Group("/consultations-lawyer"), consultationsLawyer.H)

	consultationsPsychologist.Init(helper)
	consultationsPsychologistRouter.Init(api.Group("/consultations-psychologist"), consultationsPsychologist.H)

	forms.InitRoutes(api, helper)
	settings.InitRoutes(api, helper)
	extracts.InitRoutes(api, helper)
	buildings.InitRoutes(api, helper)
	chats.InitRoutes(api, helper)
}
