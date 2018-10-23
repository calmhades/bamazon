var mysql = require ('mysql');
var inquirer = require('inquirer');
var colors = require('colors');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'bamazon',
});

// then create a call back function to confirm if connection was successful:
connection.connect(function(err){
    if(err){
        throw err;
    }
    console.log ("connected as id" + connection.threadid);  //threadid is a process id from mySQL, does not need to be defined here

    connection.query("SELECT * FROM products", function(err,res){
        if(err) throw err;
        for (var i=0; i<res.length; i++) {
        console.log("Available for sale - ".green + (colors.yellow( "Item ID: " + res[i].item_id + "," + " Product: " 
        + res[i].product_name + "," + " $" + res[i].price)));
        // console.log(res[0].item_id);
        }
        start(res);
    });
});


function start (results) { 

  
    inquirer.prompt([
        {
            // type is limited to "input" or other specific commands (input, confirm, list, rawlist, etc..).  Name field is freeform.
            type: "list",
            name: "selectItemID",
            message: "What is the Item ID of the product you would like to buy?",
            choices: function() {
                var choiceArrayItemId = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArrayItemId.push(results[i].item_id.toString());
                }
                return choiceArrayItemId;
            }
        },
        {
            type: "input",
            name: "selectNumUnits",
            message: "How many would you like to buy?"
        }

    ])
    
    .then (function(answer){
        CheckUnits(answer.selectItemID, answer.selectNumUnits);
       
    });     
};

function updateUnits(itemID, NumUnits, stock_quantity){
    console.log(" Updating units".cyan);
    var query = connection.query(
        `UPDATE products SET stock_quantity = ${stock_quantity-NumUnits} WHERE ${itemID} = item_id`, function(err, results){
            if (err){
                throw err;
            }
            console.log("Your order has been placed successfully!".bold);
            
        }
    )
}

function CheckUnits(itemID, NumUnits){


  // query the database for the unit count of items being sold
  connection.query(`SELECT stock_quantity FROM products WHERE ${itemID} = products.item_id`, function(err, results) {
    //   console.log(results);
    //   console.log(results[0].stock_quantity);
    //   console.log(NumUnits);
    if (err){
        throw err;
    }
    else if (parseInt(NumUnits)> results[0].stock_quantity) {

        console.log ("Insufficient quantity - cannot complete your order.")
        connection.end();
        }

    else if (parseInt(NumUnits) <= results[0].stock_quantity) {


    updateUnits(itemID, NumUnits, results[0].stock_quantity);
    connection.end();
    };
    })
}

