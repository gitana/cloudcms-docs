// assume we have a group
var group = ...;

// pagination
var pagination = {
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
};

// all indirect groups
group.listMembers("group", true, pagination).then(function() {
    console.log("Found a member: " + this.getId());
});
