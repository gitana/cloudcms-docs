// assume we have an application
var application = ...;

application.listEmails().each(function() {
    console.log("Email: " + this.getId());
});