platform.queryWebHosts({
    "country": "USA"
}).each(function(id) {
    console.log("Found a web host: " + id + " with title: " + this.get("title"));
});