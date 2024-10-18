import ballerina/http;
import ballerina/sql;
import ballerina/mysql;

// Database configuration
mysql:Client dbClient = check new ("localhost", 3306, "savory_save", "root", "password");

// Define the FoodItem record
type FoodItem record {
    string foodName;
    int quantity;
    string storageLocation;
    string expirationDate;
};

// Define the HTTP service
service /food on new http:Listener(8080) {

    // Resource to handle POST requests for adding a food item
    resource function post addFoodItem(http:Caller caller, http:Request req) returns error? {
        // Parse the JSON payload from the request
        json payload = check req.getJsonPayload();
        FoodItem newItem = check payload.cloneWithType();

        // SQL query to insert the new food item into the database
        sql:ParameterizedQuery query = `INSERT INTO food_items (food_name, quantity, storage_location, expiration_date)
                                        VALUES (${newItem.foodName}, ${newItem.quantity}, ${newItem.storageLocation}, ${newItem.expirationDate})`;
        var result = dbClient->execute(query);

        if (result is sql:UpdateResult) {
            // Send a success response to the client
            check caller->respond({ message: "Food item added successfully!" });
        } else {
            // Send a failure response if the insertion was not successful
            check caller->respond({ message: "Failed to add food item." });
        }
    }
}
