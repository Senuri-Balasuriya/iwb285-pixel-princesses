import ballerina/http;
import ballerina/sql;
import ballerinax/mysql.driver as _;

listener http:Listener recipeListener = new (8080);

sql:Client dbClient = check new (sql:DatabaseConfiguration {"jdbc:mysql://localhost:3306/ballerina","root","Senu2001@"});


service /savorysave on recipeListener {

    resource function get recipe() returns json|error {
        string query = "SELECT * FROM savorysave";
        stream<record{}, sql:Error?> resultStream = dbClient->query(query);
        json result = [];
        check from record {} row in resultStream
            do {
                result.push(row);
            };
        return result;
    }

    resource function post recipe(http:Request req) returns json|error {
        json recipe = check req.getJsonPayload();
        string query = "INSERT INTO savorysave (name, ingredients, meal_type, special_diet, recipe_type, cook_time) VALUES (?, ?, ?, ?, ?, ?)";
        check dbClient->execute(query, recipe.name, recipe.ingredients, recipe.meal_type, recipe.special_diet, recipe.recipe_type, recipe.cook_time);
        return { message: "Recipe added successfully!" };
    }
}
