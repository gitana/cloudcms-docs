// assume we have a branch
var branch = ...;

// find all nodes with the word "mary" in it
branch.searchNodes("mary", {
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).then(function() {
    console.log("Found a node: " + this.getId());
});
