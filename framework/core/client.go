package core

import (
	"context"
	"fmt"

	"github.com/gfanton/grpcutil/lazy"
)

type serviceClient struct {
	client *lazy.Client
}

type ServiceClient interface {
	InvokeBridgeMethodWithPromiseBlock(promise PromiseBlock, method string, b64message string)
	InvokeBridgeMethod(method string, b64message string) (string, error)
}

func NewServiceClient(cl *lazy.Client) ServiceClient {
	return &serviceClient{cl}
}

func (s *serviceClient) InvokeBridgeMethod(method string, b64message string) (string, error) {
	in, err := lazy.NewMessage().FromBase64(b64message)
	if err != nil {
		return "", err
	}
	desc := &lazy.MethodDesc{
		Name: method,
	}

	out, err := s.client.InvokeUnary(context.Background(), desc, in)
	if err != nil {
		return "", err
	}

	return out.Base64(), nil
}

func (s *serviceClient) InvokeBridgeMethodWithPromiseBlock(promise PromiseBlock, method string, b64message string) {
	go func() {
		res, err := s.InvokeBridgeMethod(method, b64message)
		// if an internal error occurred generate a new bridge error
		if err != nil {
			err = fmt.Errorf("unable to invoke bridge method: %w", err)
			promise.CallReject(err)
			return
		}

		promise.CallResolve(res)
	}()
}
