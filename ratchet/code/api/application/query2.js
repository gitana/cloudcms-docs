platform.queryApplications({
    "country": "USA"
}).each(function(id) {
    console.log("Found an application: " + id + " with title: " + this.get("title"));
});