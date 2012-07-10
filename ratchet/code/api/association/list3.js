// assume we have a node
var node = ...;

// define our pagination
var pagination = {
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
};

node.associations({
    "type": "custom:hasChapter",
    "direction": "INCOMING"
}, pagination).each(function() {
    console.log("Found an association: " + this.getId());
});
