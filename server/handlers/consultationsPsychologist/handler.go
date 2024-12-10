package consultationsPsychologist

import (
	"net/http"
	"patro/models"

	"github.com/gin-gonic/gin"
	baseModels "github.com/pro-assistance-dev/sprob/models"
)

func (h *Handler) Create(c *gin.Context) {
	var item models.ConsultationPsychologist
	_, err := h.helper.HTTP.GetForm(c, &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	err = S.Create(c.Request.Context(), &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}

func (h *Handler) GetAll(c *gin.Context) {
	items, err := S.GetAll(c.Request.Context())
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) FTSP(c *gin.Context) {
	data, err := S.GetAll(c.Request.Context())
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, baseModels.FTSPAnswer{Data: data, FTSP: *h.helper.SQL.ExtractFTSP(c.Request.Context())})
}

func (h *Handler) Get(c *gin.Context) {
	item, err := S.Get(c.Request.Context(), c.Param("id"))
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, item)
}

func (h *Handler) Delete(c *gin.Context) {
	err := S.Delete(c.Request.Context(), c.Param("id"))
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}

func (h *Handler) Update(c *gin.Context) {
	var item models.ConsultationPsychologist
	_, err := h.helper.HTTP.GetForm(c, &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	err = S.Update(c.Request.Context(), &item)
	if h.helper.HTTP.HandleError(c, err) {
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}
