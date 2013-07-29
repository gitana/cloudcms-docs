// the application
var applicationId = "GUID1";

// the reset password request id
var resetPasswordId = "GUID2";

// send the registration confirmation email
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/requests/resetpassword/" + resetPasswordId + "/send"
});