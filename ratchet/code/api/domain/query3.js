var milliseconds = new Date(2012, 7, 4, 0, 0, 0, 0).getTime();
platform.queryDomains({
    "_system.createdon.ms": { "$gt": milliseconds }
}).each(function(id) {
    console.log("Found a domain: " + id + " with title: " + this.get("title"));
});