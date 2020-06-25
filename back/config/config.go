package config

import "github.com/boltegg/env"

var (
	HttpPort         int64
	TelegramBotToken string
	TelegramChat     int64
)

func init() {
	HttpPort = env.Get("PORT").Default("8080").Int64()
	TelegramBotToken = env.Get("TELEGRAM_BOT_TOKEN").Must().String()
	TelegramChat = env.Get("TELEGRAM_CHAT").Must().Int64()
}
