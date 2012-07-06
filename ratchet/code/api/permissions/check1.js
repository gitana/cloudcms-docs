// assume we have a repository
var repository = ...;

// and a user named bob
var bob = ...;

// check whether bob has READ permissions over the repository
repository.checkPermission(bob, "READ", function(canRead) {

    if (canRead) {
        console.log("Bob can read!");
    } else {
        console.log("Woe unto he, Bob cannot read!");
    }
});
