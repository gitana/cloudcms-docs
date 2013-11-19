// the application
var applicationId = "GUID1";

// the registration hash
var hash = "HASH";

// confirm the registration (and send welcome email)
$.ajax({
    "type": "GET",
    "dataType": "json",
    "processData": false,
    "url": "/pub/applications/" + applicationId + "/registrations/" + hash + "/testvalidity",
    "done": function(data) {

        if (data.ok) {
            // looks good
        }
        else if (data.error) {
            alert(data.message);
        }

    }
});
