// assume we have an application
var application = ...;

application.listEmails({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Found an email with ID: " + this.getId());
});