// assume we have a repository
var repository = ...;

// here is our changeset id
var changesetId = "4b5b685c980c10f98beb";

// grab the parents
repository.listChangesetChildren(changesetId).each(function() {
    console.log("The changeset: " + changesetId + " has child: " + this.getId());
});
