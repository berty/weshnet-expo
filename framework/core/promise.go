package core

import (
	"fmt"
	"time"
)

type PromiseBlock interface {
	CallResolve(reply string)
	CallReject(error error)
}

func AsyncMethodResolve(message string, promise PromiseBlock) {
	go func() {
		<-time.After(time.Second * 5)
		promise.CallResolve(fmt.Sprintf("message from go: %s", message))
	}()
}

func AsyncMethodReject(promise PromiseBlock) {
	go func() {
		<-time.After(time.Second * 5)
		promise.CallReject(fmt.Errorf("this is an error"))
	}()
}
