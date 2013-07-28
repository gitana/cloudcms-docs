// the application
var applicationId = "GUID1";

// create the forgot username request
$.ajax({
    "method": "POST",
    "type": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/requests/forgotusername/create",
    "data": {
        "principal": "joe@joe.com",
        "email": {
            "body": "As per your request, here is your username at Joe's Web Site.  You can use this username along with your password to <a href='http://website.com/login.html'>log in</a>.",
            "from": "webmaster@website.com"
        }
    }
});