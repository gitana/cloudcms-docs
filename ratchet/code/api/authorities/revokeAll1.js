// assume we have a vault
var vault = ...;

// assume we have a user
var user = ...;

// take away all of the roles that a user has against the vault
vault.revokeAllAuthorities(user);
