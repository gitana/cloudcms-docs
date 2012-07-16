// assume we have a domain
var domain = ...;

// the group
var groupId = "4b5b685c980c10f98bec";

// pagination
var pagination = {
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
};

// all indirect groups
domain.listMembers(groupId, "group", true, pagination).then(function() {
    console.log("Found a member: " + this.getId());
});
