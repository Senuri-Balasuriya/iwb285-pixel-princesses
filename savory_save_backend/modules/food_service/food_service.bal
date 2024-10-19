import ballerina/io;
import ballerina/mysql;

// Configure MySQL client settings
mysql:Client dbClient = check new (config = {"localhost",3306,"root","Netha2001","savory_save"});

// Function to query the database
public function queryDatabase() returns error? {
    // SQL query to retrieve data
    string sqlQuery = "SELECT * FROM food_items";  
    mysql:Result[] result = check dbClient->query(sqlQuery);

    // Print the query results
    foreach mysql:Result row in result {
        io:println(row);
    }
}

// Main function
public function main() returns error? {
    // Call the queryDatabase function
    check queryDatabase();
}
