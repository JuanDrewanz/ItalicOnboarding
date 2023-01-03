create table categories (
    id SERIAL primary key,
    name text not null
);

INSERT INTO categories(name) VALUES ('Electronics'), ('Home'), ('Sports');


