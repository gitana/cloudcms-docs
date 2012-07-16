// assume we have an application
var application = ...;

application.queryEmails({
    "from": "dizzy@gnr.com"
}).each(function(id) {
    console.log("Found an Email: " + id + " with body: " + this.get("body"));
});