// the application
var applicationId = "GUID1";

// the registration hash
var hash = "HASH";

// confirm the registration (and send welcome email)
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + hash + "/send/welcome",
    "data": {
        "password": "password1"
    }
});