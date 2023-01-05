create table users (
    id SERIAL primary key,
    username TEXT unique,
    email TEXT unique,
    is_active BOOLEAN,
    is_banned BOOLEAN,
    password TEXT not null,
    token TEXT
);

SELECT id from users WHERE email = 'juandrewanz@gmail.com';