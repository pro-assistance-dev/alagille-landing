package main

import (
	"alagille-landing/loggerhelper"
	"alagille-landing/migrations"
	"alagille-landing/routing"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/go-pg/pg/v10/orm"
	"github.com/oiime/logrusbun"
	"github.com/pro-assistance-dev/sprob/config"
	helperPack "github.com/pro-assistance-dev/sprob/helper"
	"github.com/sirupsen/logrus"
)

func main() {
	conf, err := config.LoadConfig(".env")
	if err != nil {
		log.Fatal("cannot load config:", err)
	}
	helper := helperPack.NewHelper(*conf)
	logger := loggerhelper.NewLogger()

	router := gin.New()
	router.Use(gin.Recovery())
	//
	router.Use(loggerhelper.LoggingMiddleware(logger))
	routing.Init(router, helper)
	helper.DB.DB.AddQueryHook(logrusbun.NewQueryHook(logrusbun.QueryHookOptions{Logger: logger, ErrorLevel: logrus.ErrorLevel, QueryLevel: logrus.DebugLevel}))

	helper.Run(migrations.Init(), routing.Init)
}
