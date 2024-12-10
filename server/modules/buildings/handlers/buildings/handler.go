package buildings

import (
	"patro/modules/buildings/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	baseModels "github.com/pro-assistance-dev/sprob/models"
)

func (h *Handler) Create(c *gin.Context) {
	var item models.Building
	err := c.ShouldBindWith(&item, binding.FormMultipart)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}

	err = S.Create(c, &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}

	c.JSON(http.StatusOK, gin.H{})
}

func (h *Handler) Get(c *gin.Context) {
	id := c.Param("id")
	item, err := S.Get(c.Request.Context(), id)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, item)
}

func (h *Handler) GetAll(c *gin.Context) {
	buildings, err := S.GetAll(c)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, buildings)
}

func (h *Handler) FTSP(c *gin.Context) {
	data, err := S.GetAll(c.Request.Context())
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, baseModels.FTSPAnswer{Data: data, FTSP: *h.helper.SQL.ExtractFTSP(c.Request.Context())})
}

func (h *Handler) Delete(c *gin.Context) {
	id := c.Param("id")
	err := S.Delete(c.Request.Context(), &id)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}

func (h *Handler) Update(c *gin.Context) {
	var item models.Building
	_, err := h.helper.HTTP.GetForm(c, &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	err = S.Update(c.Request.Context(), &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, item)
}

// func (h *Handler) GetByFloorID(c *gin.Context) {
// 	item, err := S.GetByFloorID(c, c.Param("id"))
// 	if h.helper.HTTP.HandleError(c, err) {
// 		return
// 	}
// 	c.JSON(http.StatusOK, item)
// }

// func (h *Handler) GetByID(c *gin.Context) {
// 	item, err := S.GetByID(c, c.Param("id"))
// 	if h.helper.HTTP.HandleError(c, err) {
// 		return
// 	}
// 	c.JSON(http.StatusOK, item)
// }
