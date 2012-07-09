platform.queryDirectories({
    "country": "USA"
}).each(function(id) {
    console.log("Found a directory: " + id + " with title: " + this.get("title"));
});