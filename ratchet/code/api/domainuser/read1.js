// assume we have a domain
var domain = ...;

// assume we have a user Id
var userId = "4b5b685c980c10f98beb";

domain.readPrincipal(userId).then(function() {
    console.log("Found Domain User with ID: " + this.getId());
});