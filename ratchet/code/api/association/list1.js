// assume we have a node
var node = ...;

node.associations().each(function() {
   console.log("Found an association: " + this.getId());
});
