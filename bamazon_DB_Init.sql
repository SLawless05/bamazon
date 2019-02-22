DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;
CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (100) NULL,
    department_name VARCHAR
    (100) NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("processor", "Computers and Accessories/Parts", 250.00, 100),
        ("power supply", "Computers and Accessories/Parts", 50.00, 100),
        ("rasberry pi", "Computers and Accessories/Parts", 75.00, 100),
        ("arduino", "Computers and Accessories/Parts", 150.00, 100),
        ("mouse", "Computers and Accessories/Parts", 50.00, 100),
        ("keyboard", "Computers and Accessories/Parts", 100.00, 100),
        ("gpu", "Computers and Accessories/Parts", 250.00, 100),
        ("apu", "Computers and Accessories/Parts", 75.00, 100),
        ("RAM", "Computers and Accessories/Parts", 45.00, 100),
        ("Fan", "Computers and Accessories/Parts", 25.00, 100),
        ("Water Cooling Unit", "Computers and Accessories/Parts", 60.00, 100),
        ("Headset", "Computers and Accessories/Parts", 60.00, 100),
        ("Mouse-Mat", "Computers and Accessories/Parts", 20.00, 100),
        ("A Game Of Thrones", "Books", 20.00, 100),
        ("A Storm of Swords", "Books", 20.00, 100),
        ("A Feast for Crows", "Books", 20.00, 100),
        ("Shirt", "Clothes", 20.00, 100),
        ("Shorts", "Clothes", 20.00, 100),
        ("Pants", "Clothes", 20.00, 100);

