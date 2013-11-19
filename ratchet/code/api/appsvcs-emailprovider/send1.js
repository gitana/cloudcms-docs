// the application
var applicationId = "GUID1";

// the email definition
var email = {
    "to": "axl@gnr.com",
    "body": "Welcome to the Jungle!",
    "from": "slash@gnr.com"
};

// create and send the email
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "data": email,
    "url": "/pub/applications/" + applicationId + "/emailprovider/send"
});