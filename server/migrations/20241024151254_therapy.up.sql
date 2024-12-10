create table if not exists therapies (
    id uuid default uuid_generate_v4() not null primary key,
    patient_id uuid NULL,
    preparation varchar,
	dosage varchar,
    appointment_date timestamp,
	cancellation_date timestamp
);
