platform.queryRepositories({
    "country": "USA"
}).each(function(id) {
    console.log("Found a repository: " + id + " with title: " + this.get("title"));
});