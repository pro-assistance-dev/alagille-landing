create table if not exists adverse_events (
    id uuid default uuid_generate_v4() not null primary key,
    patient_id uuid NULL,
    event_description varchar,
	reported_company varchar,
    reported_person varchar,
    reported_path varchar,
    reported_date timestamp,
    created_at timestamp
);
