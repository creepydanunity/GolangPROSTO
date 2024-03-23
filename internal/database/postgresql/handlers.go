package postgresql

import (
	_ "github.com/lib/pq"
)

const (
	host = "localhost"
	port = 5432
)

type Item struct {
	ProductID       int    `json:"id"`
	ProductUsed     bool   `json:"used"`
	ProductMaterial string `json:"material"`
	ProductName     string `json:"name"`
}
