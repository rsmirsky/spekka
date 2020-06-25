package log

import "github.com/sirupsen/logrus"

var log *logrus.Logger

func init() {
	log = logrus.New()
}

func Error(args ...interface{}) {
	log.Error(args)
}
func Fatal(args ...interface{}) {
	log.Fatal(args)
}

func Infof(format string, args ...interface{}) {
	log.Infof(format, args)
}