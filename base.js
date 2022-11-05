create database cabsystem;
use cabsystem;
create table customers_id(
	customer_id int primary key auto_increment,
    user_name varchar(30),
    email varchar(20),
    password varchar(20),
    mobile_no int
);
create table cab_details(
	cab_no int primary key not null,
    cab_name varchar(20),
    cab_description varchar(30),
    cab_capacity int default 2
);
create table cab_schedule(
	cab_id int primary key,
    cab_from varchar(20),
    cab_to varchar(20),
    travel_date date,
    traveling_time time,
    rate int ,
    cab_no int, 
    constraint Fk_key foreign key(cab_no) references cab_details(cab_no)
);
create table booking_information(
	booking_number int primary key,
    date_of_booking date,
    date_of_travel date,
    cab_seat int default 2,
    cab_no int,
    customer_id int,
      constraint Fks_key foreign key(cab_no) references cab_details(cab_no),
      constraint Fkr_key foreign key(customer_id) references customers_id(customer_id)
);