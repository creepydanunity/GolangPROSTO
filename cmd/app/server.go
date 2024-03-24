package main

import (
	pb "GolangPROSTO/backend/api/proto"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"google.golang.org/protobuf/proto"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = ""
	dbname   = "prosto"
)

func GetPage(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

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
				Children: []*pb.Component{},
				Id:       2,
			},
		}

		for _, s := range items {
			item := pb.Component{
				Type: "ItemCard",
				Props: []*pb.Prop{
					{
						PropName:  "img",
						PropValue: s.Img,
					},
					{
						PropName:  "name",
						PropValue: s.Name,
					},
					{
						PropName:  "price",
						PropValue: s.Price,
					},
				},
				Children: []*pb.Component{},
				Id:       s.Id,
			}
			comps[1].Children = append(comps[1].Children, &item)
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
		fmt.Println(answer)
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Write(answer)

	}

	if params == "2" {
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
				Type: "Heading",
				Props: []*pb.Prop{
					{
						PropName:  "text",
						PropValue: "Some description",
					},
				},
				Children: []*pb.Component{},
				Id:       2,
			},
			{
				Type: "Paragraph",
				Props: []*pb.Prop{
					{
						PropName:  "text",
						PropValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum magna at dui finibus, at accumsan augue pulvinar. Aenean cursus est sed nibh faucibus vestibulum. Integer lacinia metus et mollis scelerisque. Ut sagittis eleifend nibh a posuere. Sed in molestie risus. Proin sed metus eu arcu consectetur viverra. Quisque non ultricies ante. Praesent eu volutpat nibh. Proin finibus ipsum eros, ut consequat diam fringilla sit amet. Nulla facilisi. Suspendisse ac quam orci. Sed at consectetur sapien, sit amet maximus erat. ",
					},
				},
				Children: []*pb.Component{},
				Id:       3,
			},
			{
				Type: "Image",
				Props: []*pb.Prop{
					{
						PropName:  "src",
						PropValue: "https://lesvrn.com/images/01/poddon-derevyannyj-1200h800.jpg",
					},
				},
				Children: []*pb.Component{},
				Id:       4,
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
		fmt.Println(answer)
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Write(answer)
	}

}

var schema = `
DROP TABLE items;

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	img varchar(100),
	name varchar(50),
	price varchar(10)
);

INSERT INTO items (img, name, price) VALUES
	('https://axelpack.ru/image/cache/catalog/GOST-9557-87-600x600.png', 'Поддон1', '110'),
	('https://domingo.su/images/main/BIG/000-388-241.jpg', 'Поддон2', '100'),
	('https://domingo.su/images/main/BIG/000-388-241.jpg', 'Поддон3', '95'),
	('https://axelpack.ru/image/cache/catalog/GOST-9557-87-600x600.png', 'Поддон4', '105');

`

type DBItem struct {
	Id    int32
	Img   string
	Name  string
	Price string
}

var items = []DBItem{}

func main() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sqlx.Open("postgres", psqlInfo)

	if err != nil {
		panic(err)
	}

	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Postgres DB connected!")

	db.MustExec(schema)

	if err := db.Select(&items, "SELECT * FROM items"); err != nil {
		log.Fatal(err)
	}

	fmt.Println(items)

	r := mux.NewRouter()
	r.HandleFunc("/pages/{id}", GetPage).Methods("GET")
	log.Fatal(http.ListenAndServe(":8000", r))
}
