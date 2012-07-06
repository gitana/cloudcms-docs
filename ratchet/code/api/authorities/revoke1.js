// assume we have a vault
var vault = ...;

// assume we have a user
var user = ...;

// take away from the user the "collaborator" role against the vault
vault.revokeAuthority(user, "collaborator");
