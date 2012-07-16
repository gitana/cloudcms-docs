// assume we have an application
var application = ...;

// email id
var emailId = "4b5b685c980c10f98beb";

application.readEmail(emailId).then(function() {
    console.log("Found an email with id: " + this.getId());
});
