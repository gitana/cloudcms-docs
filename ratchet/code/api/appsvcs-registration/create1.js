// the application
var applicationId = "GUID1";

// create the registration
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/create",
    "data": {
        "userEmail": "joe@joe.com",
        "userName": "joe",
        "userProperties": {
            "firstName": "Joe",
            "lastName": "Smith"
        },
        "emails": {
            "confirmation": {
                "body": "<a href='http://website.com/registration.html?hash=${hash}'>Click me</a>",
                "from": "webmaster@website.com"
            },
            "welcome": {
                "body": "Welcome to the web site!  You have successfully registered.",
                "from": "webmaster@website.com"
            }
        }
    }
});