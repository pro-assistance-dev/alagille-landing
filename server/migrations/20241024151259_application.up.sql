create table if not exists applications (
    id uuid default uuid_generate_v4() not null primary key,
    patient_id uuid NULL,
    quantity varchar,
    created_at timestamp,
    fk_scan_id uuid
);

