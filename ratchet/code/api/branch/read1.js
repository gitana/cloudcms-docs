// assume we have a repository
var repository = ...;

// assume we have a branch Id
var branchId = "4b5b685c980c10f98beb";

// read the branch
repository.readBranch(branchId).then(function() {
    console.log("Found branch: " + this.getId());
});

// read the master branch
repository.readBranch("master").then(function() {
    console.log("Found master branch");
});

