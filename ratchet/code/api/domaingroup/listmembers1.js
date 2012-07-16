// assume we have a group
var group = ...;

// retrieve a list of members
group.listMembers().then(function() {
    console.log("Found a member: " + this.getId());
});
