// assume we have a domain
var domain = ...;

// create a group
domain.createGroup({
    "name": "brewers"
});

// we can also create a group using a more generalized method
domain.createPrincipal({
    "name": "brewers",
    "type": "group"
});
