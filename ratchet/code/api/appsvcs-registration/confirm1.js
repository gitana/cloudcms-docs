// the application
var applicationId = "GUID1";

// the registration
var registrationId = "GUID2";

// confirm the registration (and send welcome email)
$.ajax({
    "method": "POST",
    "type": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + registrationId + "/confirm",
    "data": {
        "password": "password1"
    }
});