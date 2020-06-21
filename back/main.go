package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	router.StaticFile("/", "./front/dist/index.html")
	router.StaticFile("/favicon.ico", "./front/dist/favicon.ico")
	router.Static("/css", "./front/dist/css")
	router.Static("/js", "./front/dist/js")
	router.Static("/img", "./front/dist/img")

	// Listen and serve on 0.0.0.0:8080
	router.Run(":80")
}