CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
create table if not exists patients (
    id uuid default uuid_generate_v4() not null primary key,
	name varchar NULL,
	surname varchar NULL,
	patronymic varchar NULL,
	date_birth varchar NULL,
	email varchar,
	is_male varchar NULL,
	phone varchar NULL,
	fio_representative varchar NULL,
	how_do_you_know varchar NULL,
	edit_name_mode varchar NULL
);
