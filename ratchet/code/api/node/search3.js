// assume we have a branch
var branch = ...;

// define the query
// this is a wildcard search
// this will find "mary" but may also find "matt"
var query = {
    "wildcard" : { "artist" : "ma*" }
};

// run the query
branch.searchNodes(query, {
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).then(function() {
    console.log("Found a node: " + this.getId());
});
