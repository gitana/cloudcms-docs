// the application
var applicationId = "GUID1";

// the forgot username request id
var requestId = "GUID2";

// send the forgot username email
$.ajax({
    "method": "POST",
    "type": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/requests/forgotusername/" + requestId + "/send"
});