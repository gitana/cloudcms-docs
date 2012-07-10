// assume we have a repository
var repository = ...;

repository.queryBranches({
    "department": "sales"
}).each(function(id) {
    console.log("Found an Branch: " + id + " with title: " + this.get("title"));
});