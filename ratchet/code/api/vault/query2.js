platform.queryVaults({
    "country": "USA"
}).each(function(id) {
    console.log("Found a vault: " + id + " with title: " + this.get("title"));
});