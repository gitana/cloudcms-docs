platform.queryAuthenticationGrants({
    "enabled": false
}).each(function(id) {
    console.log("Found an Authentication Grant: " + id + " with title: " + this.get("title"));
});