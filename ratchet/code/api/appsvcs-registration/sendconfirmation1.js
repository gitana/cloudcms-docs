// the application
var applicationId = "GUID1";

// the registration
var registrationId = "GUID2";

// send the registration confirmation email
$.ajax({
    "method": "POST",
    "type": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + registrationId + "/send/confirmation"
});