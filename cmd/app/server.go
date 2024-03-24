package main

import (
	pb "GolangPROSTO/backend/api/proto"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/protobuf/proto"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func GetPage(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	//w.Header().Set("Content-Type", "application/octet-stream")
	params := mux.Vars(r)["id"]

	if params == "1" {
		comps := []*pb.Component{
			{
				Type: "NavBar",
				Props: []*pb.Prop{
					{
						PropName:  "Button",
						PropValue: "text",
					},
				},
				Children: []*pb.Component{},
				Id:       1,
			},
			{
				Type: "Wrapper",
				Props: []*pb.Prop{
					{},
				},
				Children: []*pb.Component{
					{
						Type: "ItemCard",
						Props: []*pb.Prop{
							{
								PropName:  "img",
								PropValue: "url",
							},
							{
								PropName:  "Name",
								PropValue: "Price",
							},
						},
						Children: []*pb.Component{},
						Id:       3,
					},
					{
						Type: "ItemCard",
						Props: []*pb.Prop{
							{
								PropName:  "img",
								PropValue: "url",
							},
							{
								PropName:  "Name",
								PropValue: "Price",
							},
						},
						Children: []*pb.Component{},
						Id:       4,
					},
					{
						Type: "ItemCard",
						Props: []*pb.Prop{
							{
								PropName:  "img",
								PropValue: "url",
							},
							{
								PropName:  "Name",
								PropValue: "Price",
							},
						},
						Children: []*pb.Component{},
						Id:       5,
					},
				},
				Id: 2,
			},
		}

		reply := &pb.PageReply{
			Components: comps,
		}

		answer, err := proto.Marshal(reply)

		if err != nil {
			fmt.Println("An error occurred:", err)
			return
		}

		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Write(answer)

	}

}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/pages/{id}", GetPage).Methods("GET")
	log.Fatal(http.ListenAndServe(":8000", r))
}
