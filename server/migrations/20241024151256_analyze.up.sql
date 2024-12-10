create table if not exists analyzes_acids (
    id uuid default uuid_generate_v4() not null primary key,
    patient_id uuid NULL,
    result varchar,
    result_date timestamp
);

create table if not exists analyzes_vitamins (
    id uuid default uuid_generate_v4() not null primary key,
	patient_id uuid NULL,
	d25oh  varchar,
	a varchar,
	e varchar,
	k1 varchar,
	result_date timestamp
);
