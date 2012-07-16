// assume we have an application
var application = ...;

application.queryEmails({
    "from": "dizzy@gnr.com"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found an Email: " + id + " with body: " + this.get("body"));
});
