package env

import "fmt"

var logger Logger

type Logger interface {
	Fatal(args ...interface{})
}

func SetLogger(l Logger) {
	logger = l
}

func init() {
	SetLogger(&defaultLogger{})
}

type defaultLogger struct {}

func (d *defaultLogger) Fatal(args ...interface{}) {
	panic(fmt.Sprintln(args...))
}