// assume we have a repository
var repository = ...;

// here is our branch id
var branchId = "4b5b685c980c10f98beb";

repository.queryChangesets({
    "branch": branchId
}).each(function() {
    console.log("Found changeset: " + this.getId());
});