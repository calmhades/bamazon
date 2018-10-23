DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (item_id int AUTO_INCREMENT, product_name varchar(50) NOT NULL, department_name varchar(50) NOT NULL, price varchar(30) NOT NULL, stock_quantity int NOT NULL, PRIMARY KEY(item_id) );
describe Products; 
select * from Products; 
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Non Slip Shoes", "Shoes", 50.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dansko Clogs", "Shoes", 100.00, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("The Joy of Mixology", "Books", 30.00, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Imbibe!", "Books", 25.00, 24);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Mixing Glass", "Barwares", 30, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Silver Stirring Spoon", "Barwares", 16.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Julep Strainer", "Barware", 6.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Demerara Sugar", "Food", 15.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Bittercube Orange", "Drinks", 18.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Derby Hat", "Clothing", 40.00, 30);

select * from products;