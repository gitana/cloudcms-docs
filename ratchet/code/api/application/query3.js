var milliseconds = new Date(2012, 7, 4, 0, 0, 0, 0).getTime();
platform.queryApplications({
    "_system.createdon.ms": { "$gt": milliseconds }
}).each(function(id) {
    console.log("Found an application: " + id + " with title: " + this.get("title"));
});