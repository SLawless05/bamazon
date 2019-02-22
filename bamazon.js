const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

var productsArr = [];

connection.connect(function (err) {
    if (err) throw err;

    start();
});

function start() {
    displayTable();
}

function buyProduct() {

    inquirer
        .prompt([
            {
                name: "id_input",
                type: "input",
                message: "Please provide the ID for the product you would like to buy: ",
            },
            {
                name: "units_input",
                type: "input",
                message: "Enter the Quantity you would like to purchase: ",
            }

        ])
        .then(function (answer) {
            var chosenItem;
            for (i = 0; i < productsArr.length; i++) {
                if (productsArr[i].item_id === parseInt(answer.id_input)) {
                    chosenItem = productsArr[i];
                }
            }

            if (chosenItem === undefined) {
                console.log("Error: There is no product with that ID");
                return;
            }

            // determine if bid was high enough
            if (chosenItem.stock_quantity > answer.units_input) {
                // bid was high enough, so update db, let the user know, and start over
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: chosenItem.stock_quantity - answer.units_input
                        },
                        {
                            item_id: chosenItem.id
                        }
                    ],
                    function (err) {
                        if (err) throw err;
                        console.log("Your Purchase was Successful!");
                        console.log("Cost: $" + parseInt(answer.units_input) * chosenItem.price);
                        console.log("Remaining Stock: " + (chosenItem.stock_quantity - parseInt(answer.units_input)));
                        connection.end();
                    }
                );
            }
            else {
                // bid wasn't high enough, so apologize and start over
                console.log("Not Enough Stock Left");

            }
        });
}

function displayTable() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        //console.log(JSON.stringify(results));

        for (var i = 0; i < results.length; i++) {
            productsArr.push(results[i]);
        }

        console.table(productsArr);

        buyProduct();

        //connection.end();
    });



}

