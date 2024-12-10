package forms

import (
	"patro/modules/forms/handlers/answervariants"
	"patro/modules/forms/handlers/fieldfills"
	"patro/modules/forms/handlers/fields"
	"patro/modules/forms/handlers/formfills"
	"patro/modules/forms/handlers/forms"
	"patro/modules/forms/handlers/formsections"
	"patro/modules/forms/handlers/selectedanswervariants"

	answervariantsRouter "patro/modules/forms/routing/answervariants"
	fieldfillsRouter "patro/modules/forms/routing/fieldfills"
	fieldsRouter "patro/modules/forms/routing/fields"
	formFillsRouter "patro/modules/forms/routing/formfills"
	formsRouter "patro/modules/forms/routing/forms"
	formsectionsRouter "patro/modules/forms/routing/formsections"
	selectedanswervariantsRouter "patro/modules/forms/routing/selectedanswervariants"

	"github.com/gin-gonic/gin"
	helperPack "github.com/pro-assistance-dev/sprob/helper"
)

func InitRoutes(api *gin.RouterGroup, helper *helperPack.Helper) {
	formsections.Init(helper)
	formsectionsRouter.Init(api.Group("/form-sections"), formsections.H)

	forms.Init(helper)
	formsRouter.Init(api.Group("/forms"), forms.H)

	fields.Init(helper)
	fieldsRouter.Init(api.Group("/fields"), fields.H)

	fieldfills.Init(helper)
	fieldfillsRouter.Init(api.Group("/field-fills"), fieldfills.H)

	answervariants.Init(helper)
	answervariantsRouter.Init(api.Group("/answer-variants"), answervariants.H)

	formfills.Init(helper)
	formFillsRouter.Init(api.Group("/form-fills"), formfills.H)

	selectedanswervariants.Init(helper)
	selectedanswervariantsRouter.Init(api.Group("/selected-answer-variants"), selectedanswervariants.H)
}
