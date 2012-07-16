// assume we have a domain
var domain = ...;

// assume we have a group Id
var groupId = "4b5b685c980c10f98beb";

domain.readPrincipal(groupId).then(function() {
    console.log("Found Domain Group with ID: " + this.getId());
});