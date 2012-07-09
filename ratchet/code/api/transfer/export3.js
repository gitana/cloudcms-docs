// assume we have a domain
var domain = ...;

// assume the target vault where the archive will get placed
var vault = ...;

// export archive
domain.exportArchive({
    "vault": vault.getId(),
    "group": "org.example",
    "artifact": "my-domain",
    "version": "1.0",
    "async": false
}).then(function() {

    // this == export job

    var groupId = this.get("archiveGroupId");
    var artifactId = this.get("archiveArtifactId");
    var versionId = this.get("archiveVersionId");

    this.subchain(vault).lookupArchive(groupId, artifactId, versionId).then(function() {
        console.log("Successfully located the archive!");
    });
});
