var
/**
 * Checks whether the given principal has a granted authority for this object.
 * This passes the result (true/false) to the chaining function.
 *
 * @chained this
 *
 * @param {Gitana.Principal|String} principal the principal or the principal id
 * @param {String} authorityId the id of the authority
 * @param callback
 */
checkAuthority: function(principal, authorityId, callback)
{
    var principalDomainQualifiedId = this.extractPrincipalDomainQualifiedId(principal);

    var uriFunction = function()
    {
        return this.getUri() + "/authorities/" + authorityId + "/check?id=" + principalDomainQualifiedId;
    };

    return this.chainPostResponse(this, uriFunction).then(function() {
        callback.call(this, this.response["check"]);
    });
},
