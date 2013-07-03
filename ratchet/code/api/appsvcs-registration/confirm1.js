// the application
var applicationId = "GUID1";

// the registration hash
var hash = "HASH";

// confirm the registration (and send welcome email)
$.ajax({
    "method": "POST",
    "type": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + hash + "/confirm",
    "data": {
        "password": "password1"
    }
});