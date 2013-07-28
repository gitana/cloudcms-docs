// the application
var applicationId = "GUID1";

// create the reset password request
$.ajax({
    "method": "POST",
    "type": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/requests/resetpassword/create",
    "data": {
        "principal": "joe@joe.com",
        "email": {
            "body": "<a href='http://website.com/password-reset.html?hash=${hash}'>Click me to reset your password</a>",
            "from": "webmaster@website.com"
        }
    }
});