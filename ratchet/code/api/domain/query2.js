platform.queryDomains({
    "country": "USA"
}).each(function(id) {
    console.log("Found a domain: " + id + " with title: " + this.get("title"));
});