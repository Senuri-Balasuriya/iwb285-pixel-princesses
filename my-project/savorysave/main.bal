import ballerina/http;
import ballerina/sql;
import ballerinax/mysql.driver as _;

listener http:Listener recipeListener = new (8080);

sql:Client dbClient = check new (sql:clientConfiguration, {
    url: "jdbc:mysql://localhost:3306/ballerina",
    username: "root",
    password: "Senu2001@",
    dbOptions: {useSSL: false}
});

service /savorysave on recipeListener {

    resource function get recipe() returns json|error{
        string query = "SELECT * FROM savorysave";
        stream<record{}, sql:Error?> resultStream = dbClient->query(query);
        json result = [];
        check from record {} row in resultStream
            do {
                result = result.concat([row]);

            };
        return result;
    }

    resource function post recipe(http:Request req) returns json|error {
    // Get JSON payload safely and handle any potential errors
    json recipeJson = check req.getJsonPayload();

    // Extract and convert fields from JSON to required types
    string name = (check recipeJson.name).toString();
    string ingredients = (check recipeJson.ingredients).toString();
    
    // Handle optional fields
    string mealType = recipeJson.meal_type is string ? check recipeJson.meal_type: "";
    string specialDiet = recipeJson.special_diet is string ? check recipeJson.special_diet : "";

    string recipeType = recipeJson.recipe_type is string ? check recipeJson.recipe_type : "";


    // Extract cook_time safely as an integer
    if recipeJson.cook_time is int {
        int cookTime = check recipeJson.cook_time;  // Cast cook_time to int explicitly
        
        // Prepare the query using ParameterizedQuery
        sql:ParameterizedQuery query = `INSERT INTO savorysave (name, ingredients, meal_type, special_diet, recipe_type, cook_time)
                                        VALUES (${name}, ${ingredients}, ${mealType}, ${specialDiet}, ${recipeType}, ${cookTime})`;
        
        // Execute the query
        sql:ExecutionResult executionResult = check dbClient->execute(query);
        return { message: "Recipe added successfully!" };
    } else {
        return error("Invalid cook_time value. It should be an integer.") ;
    }
}




}
