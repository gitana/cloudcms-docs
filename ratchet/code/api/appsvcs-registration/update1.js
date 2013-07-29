// the application
var applicationId = "GUID1";

// the registration
var registrationId = "GUID2";

// update the registration
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + registrationId + "/update",
    "data": {
        "userProperties": {
            "middleName": "Roosevelt"
        }
    }
});