create table if not exists consultations_lawyer (
    id uuid default uuid_generate_v4() not null primary key,
    patient_id uuid NULL,
    theme varchar,
    theme_date timestamp
);

create table if not exists consultations_psychologist (
    id uuid default uuid_generate_v4() not null primary key,
	patient_id uuid NULL,
    theme varchar,
    theme_date timestamp
);
