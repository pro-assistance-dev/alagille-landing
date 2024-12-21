ALTER TABLE patients
  ADD COLUMN is_russian bool, 
  add column region varchar,
  add column city varchar,
  add column diagnosis varchar,
  add column drug varchar,
  add column ill_history_id uuid,
  add column accept_id uuid
;
