// the application
var applicationId = "GUID1";

// from and to
var from = "tom@tom.com";
var to = "jerry@jerry.com";

// test the email provider
$.ajax({
    "type": "POST",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/emailprovider/test?from=" + from + "&to=" + to
});