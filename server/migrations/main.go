package migrations

import (
	"fmt"

	buildings "patro/modules/buildings/migrations"
	extracts "patro/modules/extracts/migrations"
	forms "patro/modules/forms/migrations"
	settings "patro/modules/settings/migrations"

	"github.com/uptrace/bun/migrate"
)

func Init() []*migrate.Migrations {
	res := make([]*migrate.Migrations, 0)

	migrations := migrate.NewMigrations()
	if err := migrations.DiscoverCaller(); err != nil {
		fmt.Println(err)
	}
	res = append(res, migrations, extracts.Init(), settings.Init(), buildings.Init(), forms.Init())
	return res
}
