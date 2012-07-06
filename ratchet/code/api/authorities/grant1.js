// assume we have a vault
var vault = ...;

// assume we have a user
var user = ...;

// give the user the "collaborator" role against the vault
vault.grantAuthority(user, "collaborator");
