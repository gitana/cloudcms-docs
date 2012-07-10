// assume we have two nodes
var bookNode = ...;
var chapterNode = ...;

// create the association of type "custom:hasChapter"
bookNode.associate(chapterNode, "custom:hasChapter");
