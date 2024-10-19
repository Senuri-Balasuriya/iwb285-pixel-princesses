import ballerina/io;
import ballerina/test;
import your_org_name/hello_service;  // Adjust the import according to your package name

// Before Suite Function
@test:BeforeSuite
function beforeSuiteFunc() {
    io:println("I'm the before suite function!");
}

// Test function    
@test:Config {}
function testFunction() {
    string name = "John";
    string welcomeMsg = hello_service:hello(name);  // Call the hello function
    test:assertEquals(welcomeMsg, "Hello, John");
}

// Negative Test function
@test:Config {}
function negativeTestFunction() {
    string welcomeMsg = hello_service:hello("");  // Call the hello function with an empty string
    test:assertEquals(welcomeMsg, "Hello, ");  // Expect "Hello, " for an empty input
}

// After Suite Function
@test:AfterSuite
function afterSuiteFunc() {
    io:println("I'm the after suite function!");
}
