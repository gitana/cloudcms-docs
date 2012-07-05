// assume we have a domain user
var user = ...;

// assume we have a client
var client = ...;

platform.createAuthenticationGrant({
    "domainPrincipalId": user.getDomainId(),
    "principalId": user.getId(),
    "clientId": client.getId()
});