create table UserHistory(
    id serial not null primary key,
    key_cloak_Id varchar(250) ,
    source_id varchar(250),
    source_name varchar(250),
    author varchar(250),
    title varchar(250),
    description text,
    url varchar(250),
    urlToImage varchar(250),
    publishedAt varchar(250),
    content varchar(250)
)

