package buildings

import (
	handler "patro/modules/buildings/handlers/entrances"

	"github.com/gin-gonic/gin"
)

// Init func
func Init(r *gin.RouterGroup, h *handler.Handler) {
	r.GET("", h.GetAll)
}
