// assume we have a repository
var repository = ...;

repository.queryNodes({
    "artist": "Mary Lou Lord"
}).each(function() {
    console.log("Found an album called: " + this.get("title"));
});
