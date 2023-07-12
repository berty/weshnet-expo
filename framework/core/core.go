package core

import (
	"context"
	"fmt"

	"berty.tech/weshnet"
	"berty.tech/weshnet/pkg/protocoltypes"
	"github.com/gfanton/grpcutil/lazy"
	"github.com/gfanton/grpcutil/pipe"
	"github.com/gfanton/grpcutil/rpcmanager"
	"google.golang.org/grpc"
)

type Service struct {
	ctx    context.Context
	cancel context.CancelFunc

	server *grpc.Server
	client *grpc.ClientConn

	service    weshnet.Service
	rpcmanager *rpcmanager.Service

	ServiceClient
}

const connBufferSize = 4096

func NewService() (*Service, error) {
	server := grpc.NewServer()
	listen := pipe.NewBufferPipe(connBufferSize)

	weshsvc, err := weshnet.NewService(weshnet.Opts{
		DatastoreDir: weshnet.InMemoryDirectory,
	})
	if err != nil {
		return nil, fmt.Errorf("unable to start service: %w", err)
	}
	protocoltypes.RegisterProtocolServiceServer(server, weshsvc)

	managersvc := rpcmanager.NewService(&rpcmanager.Options{})
	rpcmanager.RegisterRPCManagerServer(server, managersvc)

	ctx, cancel := context.WithCancel(context.Background())
	cc, err := listen.ClientConn(ctx)
	if err != nil {
		cancel()
		return nil, fmt.Errorf("unable to create clien conn: %w", err)
	}

	// register account to service bridge
	for serviceName := range server.GetServiceInfo() {
		managersvc.RegisterService(serviceName, cc)
	}

	go func() {
		defer cancel()
		if err := server.Serve(listen); err != nil {
			fmt.Printf("unable to serve listener: %s", err)
		}
	}()

	return &Service{
		ctx:     ctx,
		cancel:  cancel,
		service: weshsvc,

		server: server,
		client: cc,

		ServiceClient: NewServiceClient(lazy.NewClient(cc)),
	}, nil
}

func (w *Service) Close() error {
	w.client.Close()
	w.server.Stop()
	return w.service.Close()
}

func Hello(name string) string {
	return fmt.Sprintf("hello %s", name)
}
