// assume we have a node
var node = ...;

// here is a list of all incoming associations
node.incomingAssociations().each(function() {
    console.log("Found an association: " + this.getId());
});

// here we pass in type and pagination
node.incomingAssociations({
    "type": "custom:hasChapter"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function() {
    console.log("Found an association: " + this.getId());
});
