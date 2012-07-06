// assume we have a repository
var repository = ...;

// and a few users
var richie = ...;
var fonzie = ...;
var potsie = ...;
var ralph = ...;

// here we define everything we want to find out
// let's find out if any of them have READ rights to the repository
var checks = [{
    "permissionedId": repository.getId(),
    "domainId": richie.getDomainId(),
    "principalId": richie.getId(),
    "permissinId": "READ"
}, {
    "permissionedId": repository.getId(),
    "domainId": fonzie.getDomainId(),
    "principalId": fonzie.getId(),
    "permissinId": "READ"
}, {
    "permissionedId": repository.getId(),
    "domainId": potsie.getDomainId(),
    "principalId": potsie.getId(),
    "permissinId": "READ"
}, {
    "permissionedId": repository.getId(),
    "domainId": ralph.getDomainId(),
    "principalId": ralph.getId(),
    "permissinId": "READ"
}];

// run the checks
platform.checkRepositoryPermissions(checks, function(results) {
    console.log("Richie result: " + results[0].result);
    console.log("Fonzie result: " + results[0].result);
    console.log("Potsie result: " + results[0].result);
    console.log("Ralph result: " + results[0].result);
});
