package migrations

import (
	"fmt"

	"github.com/uptrace/bun/migrate"
)

func Init() []*migrate.Migrations {
	res := make([]*migrate.Migrations, 0)

	migrations := migrate.NewMigrations()
	if err := migrations.DiscoverCaller(); err != nil {
		fmt.Println(err)
	}
	res = append(res, migrations)
	return res
}
