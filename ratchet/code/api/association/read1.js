// assume we have a branch
var branch = ...;

// assume a node id
var nodeId = "4b5b685c980c10f98beb";

// assume a qname
var qname = "custom:myassociation";

// here we read the association
// remember that associations are nodes
branch.readNode(nodeId).then(function() {
    console.log("Found node: " + this.get("title"));
});

// here we read by QName
// remember that associations are nodes
branch.readNode(qname).then(function() {
    console.log("Found node: " + this.get("title"));
});
