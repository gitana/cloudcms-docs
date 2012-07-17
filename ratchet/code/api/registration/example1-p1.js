// assume we have an application
var application = ...;

// and let's say this stuff comes off a form
var email = "joe@smith.com";
var firstName = "joe";
var lastName = "smith";

//
// let's get to work
//

// our html templates
var htmls = {};

// the callback function which creates the registration
var start = function() {

    // create the registration + send confirmation email
    application
        .createRegistration({
            "userEmail": email,
            "userDomainId": "<domain id where our user will be created>",
            "userProperties": {
                "firstName": firstName,
                "lastName": lastName
            },
            "emailProviderId": "<email provider id>",
            "emails": {
                "confirmation": {
                    "body": htmls["confirmation"],
                    "from": "buildtest@gitanasoftware.com"
                },
                "welcome": {
                    "body": htmls["welcome"],
                    "from": "buildtest@gitanasoftware.com"
                }
            },
            "tenantPlanKey": "<plan key>",
            "tenantRegistrarId": "<registrar id where we will create the tenant>"
        })
        .sendConfirmationEmail();
};

// use jQuery to load the "confirmation.html" and "welcome.html" templates
// when we're finished, we'll call the start() method
var loadHtml = function(url, key, callback) {
    $.ajax(url, {
        type: "GET",
        contentType: "html",
        success: function(data) {
            htmls[key] = data;
            if (callback) { callback(); }
        }
    });
};
loadHtml("confirmation.html", "confirmation", function() {
    loadHtml("welcome.html", "welcome", function() {
        start();
    })
});



