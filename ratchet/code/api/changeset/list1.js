// assume we have a repository
var repository = ...;

repository.listChangesets().each(function() {
    console.log("Found changeset: " + this.getId());
});
