// assume we have a repository
var repository = ...;

repository.listBranches({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Branch title: " + this.get("title"));
});
