// assume we have a group
var group = ...;

// all direct members
group.listMembers(false).then(function() {
    console.log("Found a member: " + this.getId());
});

// all indirect members
group.listMembers(true).then(function() {
    console.log("Found a member: " + this.getId());
});

// all indirect groups
group.listMembers("group", true).then(function() {
    console.log("Found a member: " + this.getId());
});
