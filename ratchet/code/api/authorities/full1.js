// assume we have a repository
var repository = ...;

// assume some users that we're interested in
var billy = ...;
var bob = ...;
var thorton = ...;

// a list of the user's domain qualified ids
var userIds = [billy.getDomainQualifiedId(), bob.getDomainQualifiedId(), thorton.getDomainQualifiedId()];

// get the report
this.loadAuthorityGrants(userIds, function(allGrants) {

    report(allGrants, billy.getDomainQualifiedId());
    report(allGrants, bob.getDomainQualifiedId());
    report(allGrants, thorton.getDomainQualifiedId());

});

var report = function(allGrants, principalId) {

    console.log("Reporting grants for principal: " + principalId);

    for (var grantId in allGrants[principalId]) {

        var grant = allGrants[principalId][grantId];

        // the "role key" of the authority (i.e. consumer, collaborator)
        var grantRoleKey = grant["role-key"];
        // the id of the principal who was granted the right
        var grantPrincipalId = grant["principal"];
        // the id of the object that was granted against (i.e. repo id)
        var grantPermissionedId = grant["permissioned"];

        // NOTE: if the grant was made directly, then grantPrincipalId == userId1
        // otherwise, grantPrincipalId == the id of the domain group that was granted the authority
        // and to which the principal we're interested in belongs
        var direct = (grantPrincipalId == principalId);

        // if the grant was "propagated" via containment, the "inheritsFrom" field tell sus
        var inheritsFrom = grant["inheritsFrom"];

        //
        // REPORT
        //

        if (inheritsFrom) {

            // the id of the grant being masked
            // this is usually the original association id that our propagated association is masking
            var originalGrantId = inheritsFrom["id"];

            // the id of the original principal
            // this should be the same as userId1
            var originalPrincipalId = inheritsFrom["principal"];

            // the id of the original permissioned
            // this may be something like the folder that our document sits inside of
            var originalPermissionedId = inheritsFrom["permissioned"];

            console.log("Inherited Grant, role: " + grantRoleKey + ", permissioned: " + grantPermissionedId + ", original principal: " + originalPrincipalId + ", original permissioned: " + originalPermissionedId);;

        } else {

            if (direct){
                console.log("Direct Grant, role: " + grantRoleKey + ", permissioned: " + grantPermissionedId);
            } else {
                console.log("Indirect Grant, role: " + grantRoleKey + ", permissioned: " + grantPermissionedId + ", received from: " + grantPrincipalId);
            }
        }
    }
};