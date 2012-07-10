// assume we have a branch
var branch = ...;

// find all nodes with the word "mary" in it
branch.searchNodes("mary").then(function() {
    console.log("Found a node: " + this.getId());
});
