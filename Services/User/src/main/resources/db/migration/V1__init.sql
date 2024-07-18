create table users(
    id serial not null primary key,
    key_cloak_Id varchar(250) unique,
    preferences TEXT[]
)

