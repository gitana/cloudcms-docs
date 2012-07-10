// assume we have a branch
var branch = ...;

// create node
branch.createNode({
    "title": "Baby Blue",
    "artist": "Mary Lou Lord",
    "year": 2004
}).then(function() {
    console.log("Successfully created node, id: " + this.getId());
});
