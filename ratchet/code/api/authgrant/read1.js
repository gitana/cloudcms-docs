// assume we have a branch Id
var authGrantId = "4b5b685c980c10f98beb";

platform.readAuthenticationGrant(authGrantId).then(function() {
    console.log("Authentication Grant ID: " + this.getId());
});