create table products (
    id SERIAL primary key, 
    title TEXT not null,
    category INTEGER not null,
    avg_rating FLOAT,
    reviews_count INTEGER,
    price FLOAT not null,
    specifications json,
    imageURL TEXT, 
    FOREIGN KEY (category) REFERENCES categories(id)
);

-- specifications example: '{ "dimensions": "146,7 mm x 71,5 mm x 7,6mm", "weight": "173g", "material": "various", "color": "space-gray", "origin": "China"}'

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('iphone 14', 1, 4.6, 22, 890.00, '{ "dimensions": "146,7 mm x 71,5 mm x 7,6mm", "weight": "173g", "material": "various", "color": "space-gray", "origin": "China"}', 'https://http2.mlstatic.com/D_NQ_NP_2X_605126-MLM51559383638_092022-F.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('samsung galaxy s20', 1, 4.3, 45, 780.00, '{ "dimensions": "165 mm x 73 mm x 7 mm", "weight": "185g", "material": "various", "color": "black", "origin": "South Korea"}','https://http2.mlstatic.com/D_NQ_NP_2X_801065-MLA52415349406_112022-F.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('macBook Pro 14in', 1, 4.6, 15, 1680.00, '{ "dimensions": "312.6 mm x 221.2 mm x 15.5 mm", "weight": "1,6 kg", "material": "various", "color": "silver", "origin": "China"}','https://www.apple.com/v/macbook-pro-14-and-16/c/images/specs/macbook_pro_14_inch__41iqg8l6hsyi_large_2x.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('macBook Pro 16in', 1, 4.3, 18, 1980.00, '{ "dimensions": "355.7 mm x 248.1 mm x 16.8 mm", "weight": "2,1 kg", "material": "various", "color": "silver", "origin": "China"}','https://www.apple.com/v/macbook-pro-14-and-16/c/images/specs/macbook_pro_14_inch__41iqg8l6hsyi_large_2x.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Samsung Galaxy Z Flip 4', 1, 3.9, 41, 490.00, '{ "dimensions": "165.2 mm x 71.9 mm x 6.9 mm", "weight": "197 g", "material": "various", "color": "graphite", "origin": "South Korea"}','https://images.samsung.com/mx/smartphones/galaxy-z-flip4/buy/Flip4_Carousel_ProductKV_Graphite_MO.jpg');