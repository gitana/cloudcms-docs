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
    "async": true
});
