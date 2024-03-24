package main

import (
	pb "GolangPROSTO/backend/api/proto"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/golang/protobuf/proto"
	"github.com/gorilla/mux"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func GetPage(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
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
		}

		json.NewEncoder(w).Encode(answer)

	}

}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/pages/{id}", GetPage).Methods("GET")
	log.Fatal(http.ListenAndServe(":8000", r))
}
