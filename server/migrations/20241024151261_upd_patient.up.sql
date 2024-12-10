alter table patients add column status varchar;
alter table patients add column region varchar;
alter table patients add column comment varchar;

alter table therapies add column weight numeric;
alter table therapies add column remain numeric;

alter table applications add column item_date timestamp;
alter table applications add column item_start timestamp;
alter table applications add column item_end timestamp;

