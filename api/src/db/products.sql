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


-- CAT 2 'home'

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Luxurious Goose Down Pillow - 500 Thread Count Egyptian Cotton', 2, 4.9, 120, 62.90, '{ "dimensions": "20 in x 28 in", "weight": "200 g", "material": "Goose Down - Egyptian cotton", "color": "white", "origin": "USA"}','https://m.media-amazon.com/images/I/41TDPW-8p6L._AC_SL1024_.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Kids Carpet Playmat Rug City Life Great for Playing with Cars and Toys', 2, 2.3, 25, 23.60, '{ "dimensions": "60 in x 32 in", "weight": "200 g", "material": "Rubber", "color": "Red, Green, Yellow, Blue, Grey, Black, White", "origin": "Canada"}','https://m.media-amazon.com/images/I/91lZBQLzUJL._AC_SL1500_.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Stupell Industries London Rectangular White Framed Mirror, 16" x 20"', 2, 3.7, 15, 60.90, '{ "dimensions": "16 in x 20 in", "weight": "700 g", "material": "Wood and glass", "color": "White", "origin": "USA"}','https://m.media-amazon.com/images/I/61QjlDJtnVL._AC_SL1500_.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Easy-Going Reversible Couch Cover for 3 Cushion Couch Sofa', 2, 1.5, 19, 39.90, '{ "dimensions": "11.18in x 11.89in x 6.5in", "weight": "300 g", "material": "Polyester", "color": "Gray/Light Gray", "origin": "USA"}','https://m.media-amazon.com/images/I/61zOPFYJusL._AC_SL1500_.jpg');

-- CAT 3 'sports'

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Nike Running Shoe - men', 3, 4.2, 115, 49.90, '{ "dimensions": "13.62 x 9.29 x 4.72 inches", "weight": "3,2 kg", "material": "Fabric", "color": "black", "origin": "Taiwan"}','https://m.media-amazon.com/images/I/71WqW1URHtL._AC_UX695_.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('WILSON Adult Performance Tennis Rackets', 3, 4.6, 95, 159.00, '{ "dimensions": "Grip Size 4 - 4 1/2in", "weight": "1,2 kg", "material": "various", "color": "blue", "origin": "Mexico"}','https://m.media-amazon.com/images/I/71M+Crnw+yL._AC_SL1500_.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Under Armour Men Tech 2.0 V-Neck Short-Sleeve T-Shirt', 3, 4.4, 95, 19.99, '{ "dimensions": "from XS to XL", "weight": "200 g", "material": "100% Polyester", "color": "you can choose among 10 colors", "origin": "Japan"}','https://m.media-amazon.com/images/I/51LWeqBz9xL._AC_UX679_.jpg');

INSERT INTO products (title, category, avg_rating, reviews_count, price, specifications, imageURL)
VALUES ('Surfboard', 3, 3.2, 24, 14.00, '{ "dimensions": "35.67 x 22.05 x 10.08 inches", "weight": "20 kg", "material": "various", "color": "white", "origin": "Hawaii"}','https://m.media-amazon.com/images/I/31kEQ2RlW3L._AC_SL1200_.jpg');
