// assume we have two nodes
var sourceNode = ...;
var targetNode = ...;

// unassociate (generic)
sourceNode.unassociate(targetNode);

// or if we want to unassociate matching a type
sourceNode.unassociate(targetNode, "custom:hasChapter");

// or if we want to unassociate matching a type (undirected)
sourceNode.unassociate(targetNode, "custom:married", true);
