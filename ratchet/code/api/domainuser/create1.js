// assume we have a domain
var domain = ...;

// create a user
domain.createUser({
    "name": "ryount"
});

// we can also create a user using a more generalized method
domain.createPrincipal({
    "name": "ryount",
    "type": "user"
});
