// registration id
var registrationId = "4b5b685c980c10f98beb";

application.readRegistration(registrationId).then(function() {
    console.log("Found Registration: " + this.getId());
});

