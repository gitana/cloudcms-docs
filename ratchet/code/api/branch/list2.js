// assume we have a repository
var repository = ...;

repository.listBranches().each(function() {
    console.log("Branch title: " + this.get("title"));
});