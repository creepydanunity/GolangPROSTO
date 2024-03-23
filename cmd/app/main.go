package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "GolangPROSTO/api/proto"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

type server struct {
	pb.UnimplementedComponentsGetterServer
}

func (s *server) GetPage(ctx context.Context, in *pb.PageRequest) (*pb.PageReply, error) {
	log.Printf("Received: %v", in.GetPage())

	comps := []*pb.Component{
		{
			Type: "example_type",
			Props: []*pb.Prop{
				{
					PropName:  "prop1",
					PropValue: "value1",
				},
			},
			Children: []*pb.Component{},
			Id:       1,
		},
	}

	reply := &pb.PageReply{
		Components: comps,
	}

	return reply, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterComponentsGetterServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}