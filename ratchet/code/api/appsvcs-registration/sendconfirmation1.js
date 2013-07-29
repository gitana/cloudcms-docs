// the application
var applicationId = "GUID1";

// the registration id
var registrationId = "GUID2";

// send the registration confirmation email
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + registrationId + "/send/confirmation"
});