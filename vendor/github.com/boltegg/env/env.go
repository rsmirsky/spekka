package env

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Env struct {
	key string
	value string
	must bool
	defval interface{}
}

func Get(key string) *Env {
	val := os.Getenv(key)
	return &Env{key: key, value: val}
}

func (v *Env) Default(d interface{}) *Env {
	v.defval = d
	return v
}

func (v *Env) Must() *Env {
	v.must = true
	return v
}

func (v *Env) Int() int {
	i, err := strconv.Atoi(v.value)
	if err == nil {
		return i
	}

	def, ok := v.defval.(int)
	if ok {
		return def
	}

	if v.must {
		logger.Fatal(fmt.Errorf("env '%s' can not parse to int", v.key))
	}

	return 0
}

func (v *Env) Int64() int64 {
	i, err := strconv.ParseInt(v.value, 10, 64)
	if err == nil {
		return i
	}

	def, ok := v.defval.(int64)
	if ok {
		return def
	}

	if v.must {
		logger.Fatal(fmt.Errorf("env '%s' can not parse to int64", v.key))
	}
	return 0
}

func (v *Env) String() string {
	if v.value != "" {
		return v.value
	}

	def, ok := v.defval.(string)
	if ok {
		return def
	}

	if v.must {
		logger.Fatal(fmt.Errorf("env '%s' can not parse to string", v.key))
	}
	return ""
}

func (v *Env) Bool() bool {
	if strings.ToLower(v.value) == "true" {
		return true
	} else if strings.ToLower(v.value) == "false" {
		return false
	}

	def, ok := v.defval.(bool)
	if ok {
		return def
	}

	if v.must {
		logger.Fatal(fmt.Errorf("env '%s' can not parse to bool", v.key))
	}
	return false
}
