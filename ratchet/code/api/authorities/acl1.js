// assume we have a repository
var repository = ...;

// assume we know what node we're interested in
var nodeId = ...;

// read the node
// load the acl for the node
// print out the full ACL
repository.master().readNode(nodeId).loadACL(function(acl) {

    for (var i = 0; i < acl.rows.length; i++)
    {
        var row = acl.rows[i];

        var domainId = row["domainId"];
        var principalId = row["_doc"];
        var principalName = row["name"];
        var principalType = row["type"];
        var authorities = row["authorities"];

        for (var j = 0; j < authorities.length; j++)
        {
            console.log ("The principal [id=" + principalId + ", domainId=" + domainId + ", name=" + principalName + ", type=" + principalType + "] has authority: " + authorities[j]);
        }
    }

});
