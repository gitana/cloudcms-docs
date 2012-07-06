// suppose we have a domain
var domain = ...;

// and suppose we have a user
var user = ...;

// check whether this user has the "consumer" role against this domain
domain.checkAuthority(user, "consumer", function(check) {
    if (check) {
        console.log ("The user has the consumer role");
    }
});

// we can also look up by a domain qualified principal id
// this is of the format "domainId/principalId"
var principalId = user.getDomainQualifiedId();

// check whether this user has the "consumer" role against this domain
domain.checkAuthority(principalId, "consumer", function(check) {
    if (check) {
        console.log ("The user has the consumer role");
    }
});

