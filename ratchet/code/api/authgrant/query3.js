platform.queryAuthenticationGrants({
    "enabled": false
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found an Authentication Grant: " + id + " with title: " + this.get("title"));
});
