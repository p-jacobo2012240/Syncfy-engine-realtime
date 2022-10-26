set search_path to syncfy_configuration, "$user", public

create table tbl_db_task (
	task_id serial primary key not null,
	name varchar(40),
	run_each varchar(100),
	created_at date
)


create table tbl_db_task_detail (
	task_detail_id serial primary key not null,
	alert_id integer,
	notification_id integer
)