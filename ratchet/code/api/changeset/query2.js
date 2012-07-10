// assume we have a repository
var repository = ...;

// here is our branch id
var branchId = "4b5b685c980c10f98beb";

repository.queryChangesets({
    "branch": branchId
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function() {
    console.log("Found changeset: " + this.getId());
});
