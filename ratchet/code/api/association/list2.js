// assume we have a node
var node = ...;

node.associations({
    "type": "custom:hasChapter",
    "direction": "INCOMING"
}).each(function() {
    console.log("Found an association: " + this.getId());
});
