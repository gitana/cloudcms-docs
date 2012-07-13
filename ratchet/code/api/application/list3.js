platform.listApplications({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Application title: " + this.get("title"));
});