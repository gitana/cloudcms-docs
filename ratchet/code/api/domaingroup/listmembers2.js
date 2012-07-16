// assume we have a group
var group = ...;

// retrieve a list of users
group.listMembers("user").then(function() {
    console.log("Found a member: " + this.getId());
});

// retrieve a list of groups
group.listMembers("group").then(function() {
    console.log("Found a member: " + this.getId());
});
