// the application
var applicationId = "GUID1";

// the reset password request hash
var hash = "HASH";

// confirm the registration (and send welcome email)
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/requests/resetpassword/" + hash + "/commit",
    "data": {
        "password": "password1"
    }
});