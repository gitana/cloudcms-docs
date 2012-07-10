// assume we have a repository
var repository = ...;

repository.createBranch("0:root").then(function() {
    console.log("Created branch: " + this.getId());
});
