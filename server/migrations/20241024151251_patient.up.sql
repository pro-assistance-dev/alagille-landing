create table if not exists patients (
    id uuid default uuid_generate_v4() not null primary key,
    agree_scan_id uuid,
    human_id uuid NULL,
    representative_id uuid NULL,
    email varchar,
    phone varchar,

	inn varchar NULL,
	snils varchar NULL,
	passport_num varchar NULL,
	passport_seria varchar NULL,
	passport_division varchar NULL,
	passport_division_code varchar NULL,
	passport_citzenship varchar NULL
);
