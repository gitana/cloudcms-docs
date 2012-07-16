// assume we have a group
var group = ...;

// list users
group.listUsers().then(function() {
    console.log("Found a member: " + this.getId());
});

// list groups
group.listUsers().then(function() {
    console.log("Found a member: " + this.getId());
});

// list all indirect groups
group.listGroups(true, pagination).then(function() {
    console.log("Found a member: " + this.getId());
});
