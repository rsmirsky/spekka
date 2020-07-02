package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api"
	"github.com/seephp/spekka/back/config"
	"github.com/seephp/spekka/back/log"
)

var tg *tgbotapi.BotAPI

func main() {

	var err error
	tg, err = tgbotapi.NewBotAPI(config.TelegramBotToken)
	if err != nil {
		log.Fatal(err)
	}
	log.Infof("Telegram bot authorized on account %s", tg.Self.UserName)

	router := gin.Default()

	// Show static files
	router.StaticFile("/", "./front/dist/index.html")
	router.StaticFile("/subscription", "./front/dist/index.html")
	router.StaticFile("/prices", "./front/dist/index.html")
	router.StaticFile("/about", "./front/dist/index.html")
	router.StaticFile("/favicon.ico", "./front/dist/favicon.ico")
	router.Static("/css", "./front/dist/css")
	router.Static("/js", "./front/dist/js")
	router.Static("/img", "./front/dist/img")

	//
	router.POST("/contact-us", contactUs)

	router.Run(fmt.Sprintf(":%d", config.HttpPort))
}

func contactUs(c *gin.Context) {
	var message struct {
		Name    string `json:"name"`
		Email   string `json:"email"`
		Phone   string `json:"phone"`
		Message string `json:"message"`
	}

	err := c.BindJSON(&message)
	if err != nil {
		log.Error(err)
		c.Status(500)
		return
	}

	text := `<b>Новое сообщение</b>
<b>Имя:</b> %s
<b>Емейл:</b> %s
<b>Телефон:</b> %s
<b>Сообщение:</b> %s`

	msg := tgbotapi.NewMessage(config.TelegramChat, fmt.Sprintf(text, message.Name, message.Email, message.Phone, message.Message))
	msg.ParseMode = tgbotapi.ModeHTML
	tg.Send(msg)
}
