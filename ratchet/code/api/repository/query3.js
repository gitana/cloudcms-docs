var milliseconds = new Date(2012, 7, 4, 0, 0, 0, 0).getTime();
platform.queryRepositories({
    "_system.createdon.ms": { "$gt": milliseconds }
}).each(function(id) {
    console.log("Found a repository: " + id + " with title: " + this.get("title"));
});